import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id?: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  client_id?: string;
}
