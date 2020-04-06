import { View } from '../../../src/views/View';

describe( 'src/views/View.js', () => {
    it('Creates a new instance of View', function () {
        const view = new View( document.createElement( 'div' ) );
        expect( view ).toBeDefined();
    });
} );
