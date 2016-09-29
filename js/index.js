(function(){
    var App = {
        init : function() {
            this.cacheElements();
            this.bindEvents();
        },
        cacheElements : function() {
            this.$slSocialNetworks = $("#sl-social-networks");
            this.$slWhatsappOthers = $("#sl-whatsapp-others");
            this.$slStreamingMusic = $("#sl-streaming-music");
            this.$slStreamingVideo = $("#sl-streaming-video");
            this.$slEmails = $("#sl-emails");
            this.$slNavigation = $("#sl-navigation");
            this.$slAppDownloads = $("#sl-app-downloads");
        },
        bindEvents : function() {
            this.$slSocialNetworks.slider({
                range: "min"
            });
            this.$slWhatsappOthers.slider({
                range: "min"
            });
            this.$slStreamingMusic.slider({
                range: "min"
            });
            this.$slStreamingVideo.slider({
                range: "min"
            });
            this.$slEmails.slider({
                range: "min"
            });
            this.$slNavigation.slider({
                range: "min"
            });
            this.$slAppDownloads.slider({
                range: "min"
            });
        }
    };

    App.init();
})();