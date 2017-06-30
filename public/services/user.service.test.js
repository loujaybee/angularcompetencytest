describe('User Service', function() {

    var userService, $httpBackend;

    beforeEach(module('demoApp'))

    beforeEach(inject(function(_userService_, _$httpBackend_) {
        userService = _userService_;
        $httpBackend = _$httpBackend_;
        $httpBackend.when('POST', "/api/userdata").respond({success: 'true'});
    }));

    it('Can get and set private user variable', function() {
       userService.set('string');
       expect(userService.get()).toEqual('string');
    });

    it('Can create user with the user api', function() {
       userService.create({})
        .then(function(data){
          expect(data.data).toEqual({success: 'true'});
        });
           
       $httpBackend.flush(); 
    });
});
