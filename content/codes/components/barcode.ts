// ============================================================================
// Barcode Components
// (c) Mathigon
// ============================================================================

import {CustomElementView, register, ElementView} from '@mathigon/boost';

@register('x-barcode') // BARCODE: try adding {templateId: '#barcode'} as an argument
export class Barcode extends CustomElementView {

    private $input!: ElementView;
    private $output!: ElementView;

    ready() {
        // console.log('barcode ready');

        this.$input = this.$('.input')!;
        this.$output = this.$('.output')!;
        // console.log(this.$input);
        this.$input.on('change keyup input paste', () => {
           // console.log('something');
        });
    }

}
