import { StrategyInterface } from 'interfaces/strategy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  comment?: string;
  strategy_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  strategy?: StrategyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  strategy_id?: string;
  user_id?: string;
}
