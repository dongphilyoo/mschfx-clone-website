/* eslint-disable prettier/prettier */
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');
    
    snaptr('init', '01c4affc-a1d4-4246-9c6a-b37119988eb4', {
    'user_email': '__INSERT_USER_EMAIL__'
    });
    
    snaptr('track', 'PAGE_VIEW');