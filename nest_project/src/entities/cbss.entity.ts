import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cbss' })
export class Cbss {
  @PrimaryGeneratedColumn({ name: 'order_num' })
  order_num: number;

  @Column({ name: 'user_state_codeset' })
  user_state_codeset: string;

  @Column({ name: 'user_state' })
  user_state: string;

  @Column({ name: 'last_stop_time' })
  last_stop_time: string;

  @Column({ name: 'in_date', type: 'datetime', nullable: true })
  in_date: Date;

  @Column({ name: 'open_date', type: 'datetime', nullable: true })
  open_date: Date;

  @Column()
  product_id: string;

  @Column()
  product_name: string;

  @Column()
  product_fee: string;

  @Column()
  open_depart_id: string;

  @Column()
  open_staff_id: string;

  @Column()
  develop_depart_id: string;

  @Column()
  develop_staff_id: string;

  @Column()
  dev_chnl_id: string;

  @Column()
  dev_chnl_name: string;

  @Column()
  dev_zone_id: string;

  @Column()
  dev_zone_name: string;

  @Column()
  dev_county_id: string;

  @Column()
  county_id: string;

  @Column()
  chnl_type: string;

  @Column()
  zone_id_new: string;

  @Column()
  county_id_new: string;

  @Column()
  zone_id_local: string;

  @Column()
  county_id_local: string;

  @Column()
  zone_name_local: string;

  @Column()
  county_name_local: string;

  @Column()
  mobile_net: string;

  @Column()
  mobile_brand_name: string;

  @Column()
  mobile_model_name: string;

  @Column()
  is_first: number;

  @Column()
  is_use_5g: number;

  @Column()
  is_5g: number;

  @Column()
  basic_credit_value: number;

  @Column()
  credit_value: number;

  @Column()
  balance: string;

  @Column()
  innet_pay: string;

  @Column()
  pay_innet_30_within: string;

  @Column()
  pay_innet_30_more: string;

  @Column()
  bill_fee: string;

  @Column()
  bill_fee_pre1: string;

  @Column()
  bill_fee_pre2: string;

  @Column()
  bill_fee_pre3: string;

  @Column()
  gprs_flow: string;

  @Column()
  gprs_flow_pre1: string;

  @Column()
  gprs_flow_pre2: string;

  @Column()
  gprs_flow_pre3: string;

  @Column()
  flow_5g: string;

  @Column()
  flow_5g_pre1: string;

  @Column()
  flow_5g_pre2: string;

  @Column()
  flow_5g_pre3: string;

  @Column()
  call_dura: string;

  @Column()
  bill_dura: string;

  @Column()
  mo_bill_dura: string;

  @Column()
  call_dura_pre1: string;

  @Column()
  call_dura_pre2: string;

  @Column()
  call_dura_pre3: string;

  @Column()
  sms_cnt: string;
}
