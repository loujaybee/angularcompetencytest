describe('Country Service', function() {

    var countryService, $httpBackend;

    beforeEach(module('demoApp'))

    beforeEach(inject(function(_countryService_, _$httpBackend_) {
        countryService = _countryService_;
        $httpBackend = _$httpBackend_;
    }));

    it('Get method returns api response as array', function(done) {

       $httpBackend.when('GET', "https://restcountries.eu/rest/v1/region/Europe").respond(['api response']);

        countryService.get()
          .then(function(data){
            expect(data.data).toEqual(['api response']);
          })
          .finally(done)

        $httpBackend.flush(); 
    });
});
