/**
 * Created by mirif on 31/07/2017.
 */
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {normalizeDate} from "./util";
chai.use(sinonChai);

describe('utils', () => {

  it('should return normalized date given date', () => {
    const now = new Date(1990,11,12);
    const normalized = normalizeDate(now);
    expect(normalized).to.equal('12/11/1990');
  });



});