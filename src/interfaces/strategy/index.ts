import { FeedbackInterface } from 'interfaces/feedback';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StrategyInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    order?: number;
  };
}

export interface StrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
