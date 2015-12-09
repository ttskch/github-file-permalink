'use strict';

$(function () {
    var latestCommitHash = $('.commit-tease-sha').attr('href').replace(/.+\/([^\/]+)$/ig, '$1');
    var permalink = window.location.href.replace(/\/blob\/[^\/]+\//, '/blob/' + latestCommitHash + '/');

    var $buttonGroup = $('.file-header .file-actions .btn-group');
    var $newButton = $('<a>Latest version</a>').addClass('btn btn-sm').attr('href', permalink);
    $newButton.appendTo($buttonGroup);
});
