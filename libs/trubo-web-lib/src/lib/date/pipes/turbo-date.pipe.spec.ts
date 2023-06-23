import { TurboDatePipe } from './turbo-date.pipe';

describe('TurboDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TurboDatePipe();
    expect(pipe).toBeTruthy();
  });
});
