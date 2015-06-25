// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function(params) {
    this.render();
    var that = this;
    this.collection.on('add', function(){
      that.render();
    });
    this.collection.on('remove',function(){
      that.render();
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
