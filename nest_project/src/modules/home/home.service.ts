import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cbss } from 'src/entities/cbss.entity';
import { Repository } from 'typeorm';
import mapdata from './map';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Cbss)
    private cbssRepository: Repository<Cbss>,
  ) {}

  getMap() {
    return mapdata;
  }

  async getInnerPay() {
    const data = await this.cbssRepository.query(
      `SELECT SUBSTR(in_date,1,7) AS time, ROUND(COUNT(CASE WHEN pay_innet_30_within >0 THEN 1 ELSE NULL END)/ COUNT(pay_innet_30_within),2) AS proportion, 
      ROUND(SUM(pay_innet_30_within)/ COUNT(CASE WHEN pay_innet_30_within >0 THEN 1 ELSE NULL END),2) AS amount
      FROM cbss -- where SUBSTR(in_date,1,7) = SUBSTR(now(),1,7)
      WHERE (product_name NOT LIKE "%宽带%" AND product_name NOT LIKE "%固话%" AND product_name NOT LIKE "%测试%")
      GROUP BY SUBSTR(in_date,1,7)
      ORDER BY time;`,
    );
    return data;
  }

  //当月总发展量、移网发展量、固网发展 环比发展量
  async getDep(): Promise<any> {
    const data = await this.cbssRepository.query(
      `SELECT count(1) as total, 
      count(case when product_name like "%宽带%" or product_name like "%固话%" then null else 1 end) as move,
      count(case when product_name like "%宽带%" or product_name like "%固话%" then 1 else null end) as static
      from cbss
      where SUBSTR(in_date,1,7) = SUBSTR(now(),1,7) and product_name not like "%测试%";`,
    );
    return data;
  }

  //当月移网和固网top
  async getTop(): Promise<any> {
    const data_static = await this.cbssRepository.query(
      `SELECT product_name,count(1) as count from cbss 
      where SUBSTR(in_date,1,7) = SUBSTR(now(),1,7) 
      and (product_name like "%宽带%" or product_name like "%固话%") 
      and product_name not like "%测试%"
      group by product_name
      order by count desc
      limit 1;`,
    );
    const data_move = await this.cbssRepository.query(
      `SELECT product_name as name1,count(1) as value1 from cbss
      where SUBSTR(in_date,1,7) = SUBSTR(now(),1,7)
      and (product_name not like "%宽带%" and product_name not like "%固话%" and product_name not like "%测试%")
      group by product_name
      order by value1 desc
      limit 1;`,
    );
    const data = {
      data_static,
      data_move,
    };
    return data;
  }

  //渠道发展量--占比、top5表格
  async getChnlDep(): Promise<any> {
    const data = await this.cbssRepository.query(
      `SELECT	chnl_type , COUNT(1) as dep_count from cbss
      where YEAR(in_date)=2023 and chnl_type is not null
      GROUP BY chnl_type
      order by dep_count desc;`,
    );
    return data;
  }

  //网格发展量--占比、top5表格
  async getZoneDep(): Promise<any> {
    const data = await this.cbssRepository.query(
      `SELECT	dev_zone_name	, COUNT(1) as dep_zone from cbss
      where YEAR(in_date)=2023 and (product_name not like "%测试%")
      GROUP BY dev_zone_name
      order by dep_zone desc;`,
    );
    return data;
  }

  //每月发展量趋势（折线图）
  async getEveryMonth(): Promise<any> {
    const data = await this.cbssRepository.query(
      `SELECT '总体' AS pname, SUBSTR(in_date,1,7) AS in_date, COUNT(1) AS dep
      FROM cbss
      WHERE YEAR(in_date)=2023 AND (product_name NOT LIKE "%测试%")
      GROUP BY SUBSTR(in_date,1,7) UNION ALL
      SELECT '移网' AS pname, SUBSTR(in_date,1,7) AS in_date, COUNT(CASE WHEN product_name LIKE "%宽带%" OR product_name LIKE "%固话%" THEN NULL ELSE 1 END) AS dep
      FROM cbss
      WHERE YEAR(in_date)=2023 AND (product_name NOT LIKE "%测试%")
      GROUP BY SUBSTR(in_date,1,7) UNION ALL
      SELECT '固网' AS pname, SUBSTR(in_date,1,7) AS in_date, COUNT(CASE WHEN product_name LIKE "%宽带%" OR product_name LIKE "%固话%" THEN 1 ELSE NULL END) AS dep
      FROM cbss
      WHERE YEAR(in_date)=2023 AND (product_name NOT LIKE "%测试%")
      GROUP BY SUBSTR(in_date,1,7)
      ORDER BY pname, SUBSTR(in_date,1,7) ASC;`,
    );
    return data;
  }
}
