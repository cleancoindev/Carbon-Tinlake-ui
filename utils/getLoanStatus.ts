// tslint:disable-next-line:import-name
import BN from 'bn.js';

type LoanStatus = 'Whitelisted' | 'Ongoing' | 'Repaid';

export default function getLoanStatus(principal: BN, debt: BN): LoanStatus {
  if (!principal.isZero()) { return 'Whitelisted'; }
  if (principal.isZero() && !debt.isZero()) { return 'Ongoing'; }
  if (principal.isZero() && debt.isZero()) { return 'Repaid'; }
  throw Error('Unknown loan status');
}