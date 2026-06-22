$(function () {
    Retrieve();
});

function Retrieve() {
    var dataArray = [];
    var URL = ' 部署為網路應用程式的網址 ';
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: "json",
        error: function (xhr) {
            alert(' 發生錯誤！請重新再試一次～ ');
        },
        success: function (Jdata) {
            var Info = Jdata.data;
            // 資料量長度
            var Length = Number(Info.length);
            if (Length > 0) {
                for (i = 0; Info.length > i; i++) {
                    FillTime = Info[i].FillTime;
                    Department = Info[i].Department;
                    Applicant = Info[i].Applicant;
                    RoomName = Info[i].RoomName;
                    BorrowDate = Info[i].BorrowDate;
                    StartTime = Info[i].StartTime;
                    EndTime = Info[i].EndTime;
                    Reason = Info[i].Reason;
                    // 印出資料
                    print();
                };
            } else {
                $("#table-data").append(' 暫無資料 ');
            }
        }
    });
};

// 資料列印
function print() {
    $("#table-data").append(
        '<tr>' +
        '<td class="w-15">' + FillTime + '</td>' +
        '<td class="w-10">' + Department + '</td>' +
        '<td class="w-10">' + Applicant + '</td>' +
        '<td class="w-10">' + RoomName + '</td>' +
        '<td class="w-15">' + BorrowDate + '</td>' +
        '<td class="w-15">' + StartTime + '</td>' +
        '<td class="w-15">' + EndTime + '</td>' +
        '<td class="w-10">' + Reason + '</td>' +
        '</tr>'
    );
};

// 會議室搜尋
$("#doaction").click(function () {
    select();
});

function select() {
    var result = "";
    $("#select").each(function () {
        result = $(this).val();
        search_table($(this).val());
    });
};

function search_table(value) {
    $('tbody tr').each(function () {
        var found = 'false';
        $(this).each(function () {
            if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                found = 'true';
            }
        });
        if (found == 'true') {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}