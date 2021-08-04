/*$(document).ready(function(){
    menuLinkChk();

    $('.quest-list').on('click', 'button', function(){
        var questItem = $('.quest-item');
        var dataId = $(this).attr('data-id');
        var targetItem = $('.quest-item[data-id="'+dataId+'"]');
        if($(this).hasClass('btn-default')){
            questAddAfter(targetItem);
        } else if ($(this).hasClass('btn-del')) {
            if(questItem.length <= 1) {
                alert('삭제할 수 없습니다.')
            } else {
                targetItem.remove();
            }
        }
    });
});

function menuLinkChk() {
    url = location.href;
    $('.menu-item').each(function(){
        var targetLink = $(this).find('a').attr('href');
        if(url.indexOf(targetLink) != -1) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

function questAddAfter(afterItem){
    var item = createItem();
    afterItem.after(item);
}

var id = 1;
function createItem() {
    var $item = $('<div class="quest-item" data-id="'+id+'"><header class="quest-header">질문내용</header><div class="quest-body"><textarea></textarea></div><footer class="quest-footer"><button class="btn-default" data-id="'+id+'">추가</button><button class="btn-del" data-id="'+id+'">삭제</button></footer></div>');
    id++;
    return $item;
}*/