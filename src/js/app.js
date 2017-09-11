console.log('Hello world');

if($programForm.length > 0) programForm.find('select').on('change', () => programForm.trigger('submit'));
