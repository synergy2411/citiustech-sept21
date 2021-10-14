import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';

xdescribe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new AsyncService()
  });

  it("Should call done after promise resolved", (done)=>{
    service.getPromise().then(flag => {
      expect(flag).toBeTruthy();
    })
    done();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
