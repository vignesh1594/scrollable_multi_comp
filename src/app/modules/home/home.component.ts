import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabsListData: any;
  userData = {
    name: "",
    time: "",
    description: ""
  };

  storyData: any = [{
    "img": "",
    "name": ""
  }]

  playlist: any = [];
  imagelist: any = [];
  imageTextlist: any = [];
  podcastTextlist: any = [];
  movieList: any = [];
  songBollywoodList: any = [];
  newPlaylistList: any = [];
  upcomingLiveList: any = [];
  shortFlimList: any = [];
  popularMusicList:any = [];
  constructor() { }

  ngOnInit() {
    let currentTime;
    if (new Date().getHours() < 12) {
      currentTime = 'Good Morning';
    } else if (new Date().getHours() < 18) {
      currentTime = 'Good Afternoon';
    } else {
      currentTime = 'Good Evening';
    }
    this.userData = {
      name: "Rahul",
      time: currentTime,
      description: "Pick from where you left"
    };
    this.storyData = {
      type: "story",
      data: [
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 90, "height": 90, "name": "srk" },
        { img: "http://placehold.it/350x150/000000", "width": 90, "height": 90, "name": "ar" },
        { img: "http://placehold.it/350x150/111111", "width": 90, "height": 90, "name": "new" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 90, "height": 90, "name": "New Music" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 90, "height": 90, "name": "collection" },
        { img: "http://placehold.it/350x150/333333", "width": 90, "height": 90, "name": "tr" },
        { img: "http://placehold.it/350x150/666666", "width": 90, "height": 90, "name": "str" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg", "width": 90, "height": 90, "name": "ap" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg", "width": 90, "height": 90, "name": "rj" },
        { img: "http://placehold.it/350x150/333333", "width": 90, "height": 90, "name": "sj" },
        { img: "http://placehold.it/350x150/666666", "width": 90, "height": 90, "name": "mgr" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg", "width": 90, "height": 90, "name": "jaya" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg", "width": 90, "height": 90, "name": "sk" },
        { img: "http://placehold.it/350x150/333333", "width": 90, "height": 90, "name": "av" },
        { img: "http://placehold.it/350x150/666666", "width": 90, "height": 90, "name": "place" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 90, "height": 90, "name": "mood" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg", "width": 90, "height": 90, "name": "sad" },
        { img: "http://placehold.it/350x150/333333", "width": 90, "height": 90, "name": "classic" },
        { img: "http://placehold.it/350x150/666666", "width": 90, "height": 90, "name": "romantic" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 90, "height": 90, "name": "aaj" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg", "width": 90, "height": 90, "name": "old" },
      ],
      config: { "slidesToShow": 9, "slidesToScroll": 4, "infinite": false }
    };

    this.playlist = {
      type: "playlist",
      data: [{
        "list": [
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 60, "height": 60, "name": "My Playlist" },
          { img: "http://placehold.it/350x150/000000", "width": 60, "height": 60, "name": "ar" },
          { img: "http://placehold.it/350x150/111111", "width": 60, "height": 60, "name": "new" },
        ]
      },
      {
        "list": [
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 60, "height": 60, "name": "New Music" },
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 60, "height": 60, "name": "collection" },
          { img: "http://placehold.it/350x150/333333", "width": 60, "height": 60, "name": "tr" },
        ]
      },
      {
        "list": [
          { img: "http://placehold.it/350x150/666666", "width": 60, "height": 60, "name": "str" },
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg", "width": 60, "height": 60, "name": "ap" },
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg", "width": 60, "height": 60, "name": "rj" },
        ]
      },
      {
        "list": [
          { img: "http://placehold.it/350x150/333333", "width": 60, "height": 60, "name": "sj" },
          { img: "http://placehold.it/350x150/666666", "width": 60, "height": 60, "name": "mgr" },
          { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg", "width": 60, "height": 60, "name": "jaya" },
        ]
      },
      ],
      config: { "slidesToShow": 2, "slidesToScroll": 4, "infinite": false }
    };

    this.imagelist = {
      type: "image",
      header: "Hungama Special",
      arrow: false,
      data: [
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "srk" },
        { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "ar" },
        { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "new" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "New Music" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "collection" },
        { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "tr" },
        { img: "http://placehold.it/350x150/666666", "width": 300, "height": 300, "name": "str" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg", "width": 300, "height": 300, "name": "ap" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg", "width": 300, "height": 300, "name": "rj" },
        { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "sj" },
        { img: "http://placehold.it/350x150/666666", "width": 300, "height": 300, "name": "mgr" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg", "width": 300, "height": 300, "name": "jaya" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg", "width": 300, "height": 300, "name": "sk" },
        { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "av" },
        { img: "http://placehold.it/350x150/666666", "width": 300, "height": 300, "name": "place" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "mood" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg", "width": 300, "height": 300, "name": "sad" },
        { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "classic" },
        { img: "http://placehold.it/350x150/666666", "width": 300, "height": 300, "name": "romantic" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "aaj" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg", "width": 300, "height": 300, "name": "old" },
      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };

    this.imageTextlist = {
      type: "image_text",
      header: "Morning Radios",
      arrow: true,
      data: [
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },
        { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },
        { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },
        { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },
        { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "Radio", "description": "xxx listening" },

      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };

    this.podcastTextlist = {
      type: "image_text_list",
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Podcast", "description": "Artist Name" },
          ]
        },
      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };

    this.songBollywoodList = {
      type: "image_text_list",
      header: "Tranding in Bollywood",
      arrow: true,
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Song/Album", "description": "Artist Name" },
          ]
        },
      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };

    this.newPlaylistList = {
      type: "image_text_list",
      header: "New Releases",
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },

        {
          "list": [
            { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Playlist", "description": "Artist Name" },
          ]
        },
      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };

    this.upcomingLiveList = {
      type: "image_text_list",
      header: "Upcoming Live Performances",
      arrow: true,
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },

        {
          "list": [
            { img: "http://placehold.it/350x150/333333", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/111111", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Artist and the Location", "description": "Artist Name" },
          ]
        },
      ],
      config: { "slidesToShow": 2, "slidesToScroll": 4, "infinite": false }
    };

    this.shortFlimList = {
      type: "image_text_list",
      header: "New Short Flims",
      arrow: true,
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },

        {
          "list": [
            { img: "http://placehold.it/350x150/333333", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/111111", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Short Video", "description": "xx,xxx views" },
          ]
        },
      ],
      config: { "slidesToShow": 2, "slidesToScroll": 4, "infinite": false }
    };

    this.popularMusicList = {
      type: "image_text_list",
      header: "Most Popular Music Videos",
      arrow: true,
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/333333", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/111111", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
            { img: "http://placehold.it/350x150/000000", "width": 450, "height": 300, "name": "Music Video", "description": "Artist Name" },
          ]
        },
      ],
      config: { "slidesToShow": 2, "slidesToScroll": 4, "infinite": false }
    };

    this.movieList = {
      type: "image_text_list",
      header: "Tranding Movies",
      arrow: true,
      data: [
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
          ]
        },
        {
          "list": [
            { img: "http://placehold.it/350x150/111111", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },

            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
            { img: "http://placehold.it/350x150/333333", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
          ]
        },
        {
          "list": [
            { img: "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
            { img: "http://placehold.it/350x150/000000", "width": 300, "height": 300, "name": "Movie", "description": "20XX" },
          ]
        },
      ],
      config: { "slidesToShow": 3, "slidesToScroll": 4, "infinite": false }
    };



    this.tabsListData = [
      {
        header: 'All',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        newPlaylistDetails: this.newPlaylistList,
        upcomingLiveDetails: this.upcomingLiveList,
        shortFlimDetails: this.shortFlimList,
        popularMusicDetails: this.popularMusicList,
        movieDetails: this.movieList,

      },
      {
        header: 'Top 40',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Chill Winters',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Podcasts',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Morning Vibes',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Movies',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Short Video',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Radio',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      },
      {
        header: 'Live Performances',
        userDetails: this.userData,
        stroyDetails: this.storyData,
        playlistDetails: this.playlist,
        imageDetails: this.imagelist,
        radioDetails: this.imageTextlist,
        podcastDetails: this.podcastTextlist,
        songBollywoodDetails: this.songBollywoodList,
        movieDetails: this.movieList,
      }];

  }

}
