window.fn = {};

window.fn.toggleMenu = function () {
    document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
    document.getElementById('appTabbar').setActiveTab(index);
    document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
    window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
    if (anim) {
        document.getElementById('appNavigator').pushPage(page.id, {
            data: {
                title: page.title
            },
            animation: anim
        });
    } else {
        document.getElementById('appNavigator').pushPage(page.id, {
            data: {
                title: page.title
            }
        });
    }
};
window.fn.incrFontSize = function () {
    // Increase Font Size          
    var currentSize = $('p,.CardCustom').css('font-size');
    var currentSize = parseFloat(currentSize) * 1.2;
    $('p,.CardCustom').css('font-size', currentSize);
    return false;
};
window.fn.decrFontSize = function () {
    var currentFontSize = $('p,.CardCustom').css('font-size');
    var currentSize = $('p,.CardCustom').css('font-size');
    var currentSize = parseFloat(currentSize) * 0.8;
    $('p,.CardCustom').css('font-size', currentSize);
    return false;
};
window.fn.resetFontSize = function () {
    $('p,.CardCustom').css('font-size', "1.2rem");
};

ons.ready(function () {
    // deviceready event is fired
    // Call whatever Cordova APIs
    
    $("#radio1ON").click(function () {
        ons.notification.alert('Screen Always ON Enabled');
        window.plugins.insomnia.keepAwake();
    });
    $("#radio2OFF").click(function () {
        ons.notification.alert('Screen Always ON Disabled');
        window.plugins.insomnia.allowSleepAgain();
    });
    $("#aboutPageNotification").click(function () {
        ons.notification.alert('This dialog was created with ons.notification');
    });

    // ons.disableDeviceBackButtonHandler();
    // document.addEventListener('backbutton', function () {
    //    var page = $.mobile.activePage.attr('id');

    // }, false);





    //
})



