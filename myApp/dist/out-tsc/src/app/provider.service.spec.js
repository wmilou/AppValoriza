import { TestBed } from '@angular/core/testing';
import { ProviderService } from './provider.service';
describe('ProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=provider.service.spec.js.map