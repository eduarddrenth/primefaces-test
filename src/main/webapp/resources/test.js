/* Place any Javascript here you want loaded in test.xhtml */
if (PrimeFaces.widget.DataTable) {
    PrimeFaces.widget.DataTable.prototype.disableCellEditors = function(element) {
        if (element) {
            $(element).find(":input:enabled").attr('disabled', 'disabled');
        } else {
            $(".ui-cell-editor-input :input:enabled").attr('disabled', 'disabled').attr("data-disabled-by-editor", "true");
            //#13159: re-enable for all rows that are rowEditing="true"
            this.enableCellEditors($('.ui-row-editing'));

        }
    }
}