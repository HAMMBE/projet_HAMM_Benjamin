import { Client} from "../../Types/client";

export class AddClient{
  static readonly type = '[Client] Add';
  constructor(public payload: Client) {}
}
