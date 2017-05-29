FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        console.log("Yeah! We are Home:");
        if (Meteor.userId()) {
            FlowRouter.go("uhome")
        } else
            BlazeLayout.render("HomeLayout");
    }
});

FlowRouter.route('/u/home', {
    name: 'uhome',
    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "userHome"});
    }
});