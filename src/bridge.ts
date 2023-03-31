export type AllowanceResponse = {
  contract: string;
  total_allowance: string;
  remaining_allowance: string;
};

export class AllowanceState {
  allowance: AllowanceResponse;
  contract: string;
  address: string;

  constructor({
    allowance,
    address,
    contract,
  }: {
    allowance: AllowanceResponse;
    address: string;
    contract: string;
  }) {
    this.allowance = allowance;
    this.address = address;
    this.contract = contract;
  }
}
