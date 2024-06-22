describe('Gilded Rose Approval Test', () => {
    let originalProcessArgv: string[];

    beforeEach(() => {
        originalProcessArgv = process.argv;
    });

    afterEach(() => {
        process.argv = originalProcessArgv;
    });

    it('is an example test case', () => {
        process.argv = ['<node>', '<script', '30'];
        require('./golden-master-text-test.ts');
    });
});
