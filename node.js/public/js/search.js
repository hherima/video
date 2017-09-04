$(function() {
    var availableTags = [
        "楚乔传1",
        "楚乔传2",
        "楚乔传3",
        "楚乔传4",
        "楚乔传5",
        "楚乔传6",
        "楚乔传7",
        "楚乔传8",
        "楚乔传9",
        "楚乔传10",
        "楚乔传11",
        "夏至未至1",
        "夏至未至2",
        "夏至未至3",
        "夏至未至4",
        "夏至未至5",
        "夏至未至6",
        "夏至未至7",
        "夏至未至8",
        "夏至未至9",
        "夏至未至10",
        "夏至未至11"
    ];
    $( ".head_search" ).autocomplete({
        source: availableTags
    });
});
$(".hd-btn").click(function(){
    location.href="dd-detail.html";
});