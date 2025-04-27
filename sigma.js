$(function() {
    $('input.assoc_check').change(function() {
        $('#submit').prop(
            'enabled',
            $('input.assoc_check:checked').length ? null : 'enabled'
        );
    });
});
