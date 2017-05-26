Example = new Meteor.Collection('examples');

ExampleSchema = new SimpleSchema({
    user: {
        type: String,
        autoValue: function () {
            this.userId
        }
    }
});