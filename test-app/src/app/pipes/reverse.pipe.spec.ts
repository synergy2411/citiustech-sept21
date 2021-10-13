import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
// AAA
let pipeObj : ReversePipe;
  beforeEach(()=>{
    pipeObj = new ReversePipe();
  })

  afterEach(() => {
    pipeObj = null;
  })
  it("Should revere the string", () => {
    expect(pipeObj.transform('abcd')).toBe('dcba')
  })

  it('create an instance', () => {
    expect(pipeObj).toBeTruthy();
  });
});
