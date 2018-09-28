MakerBadge.prototype={

  constructor:MakerBadge,

  run:function(){
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const button = document.createElement('div');
    const statsList = document.createElement('ul');
    const username = document.createElement('div');
    const profileLink = document.createElement('a');
    const twitter = document.createElement('a');
    twitter.style = "display:inline-block;"
    twitter.href = "https://twitter.com/chriskonings"
    twitter.target = "_blank"
    twitter.innerHTML = '<svg height="30" data-name="Logo — FIXED" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path fill="none" d="M0 0h400v400H0z"/><path d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45 51.34 51.34 0 0 0-87.41 46.78A145.62 145.62 0 0 1 92.4 107.81a51.33 51.33 0 0 0 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65a51.31 51.31 0 0 0 41.15 50.28 51.21 51.21 0 0 1-23.16.88 51.35 51.35 0 0 0 47.92 35.62 102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23" fill="#1da1f2"/></svg>'
    //set the style based on theme
    this.setStyle()

    document.getElementsByTagName('head')[0].appendChild(this.style);
    button.innerHTML = 'Maker';
    profileLink.innerHTML = 'P'
    profileLink.target = '_blank';
    profileLink.classList = 'ph-btn';
    container.classList = 'maker-badge';
    button.classList = 'maker-badge__btn';
    content.classList = 'maker-badge__content';
    statsList.classList = 'maker-badge__stats';
    username.style = 'text-align:center;margin:.5rem 0;font-weight:800;'
    button.innerHTML = 'Maker'
    container.appendChild(button);
    container.appendChild(content);
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.producthunt.com/v1/users/' + this.userId, true);
    request.setRequestHeader('Authorization','Bearer ' + 'c531da26873a8dc7ea8be6d7e519f296f5f521d2d756bf9862552b6ed5f5f161 ');

    var that= this
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        const userPic = that.pic ? that.pic : data.user.image_url['50px']
        const userPicSize = that.theme === 3 ? 50 : 30
        const picEl = '<img width="' + userPicSize + '" class="maker-badge__btn-img" src="' + userPic + '"/>&nbsp;&nbsp;'
        const name = that.name ? that.name : data.user.name
        username.innerHTML = '@' + data.user.username;
        if (that.theme === 2) {
          button.innerHTML = picEl + 'by ' + name;
        } else if (that.theme === 3) {
          button.innerHTML = picEl;
        } else {
          button.innerHTML = 'by ' + name;
        }
        profileLink.href = data.user.profile_url;
        statsList.innerHTML = '<li><b>' + data.user.posts_count + '</b>' + ' posts</li>' +
        '<li><b>' + data.user.maker_of_count + '</b>' + ' products</li>' +
        '<li><b>' + data.user.followers_count + '</b>' + ' followers</li>';
        content.appendChild(profileLink)
        content.appendChild(username);
        content.appendChild(statsList)
        if (that.twitter) {
          content.appendChild(twitter)
        }
        body.appendChild(container);
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function(err) {
      console.log(err)
    };
    request.send();

    container.addEventListener('click', () => {
      container.classList.toggle('isOpen')
    })
    },

    setStyle: function() {
      let isOpenStyle = '.isOpen{bottom: calc(0px + 2.4rem);}'
      this.style = document.createElement('style');
      this.style.type = 'text/css';
      //style 1 (default style)
      if (this.theme === 1) {
        var profileLinkStyle = ".ph-btn{margin: 0 auto;\
          height: 30px; \
          width: 30px; \
          text-align: center; \
          line-height: 30px;\
          background: #da552f;\
          display: block;\
          border-radius: 50%;\
          font-size: 1rem;\
          color: #fff;\
          text-decoration: none;\
          font-weight: 800;}";
          const borderBxStyle = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}'
          const containerStyle = '.maker-badge{font-size:16px;font-family:helvetica;text-align:right;height:200px;min-width:160px;transition: all .3s ease;position:fixed;bottom:-160px;' + this.position + ':0;}';
          const contentStyle = '.maker-badge__content{text-align:center;font-size:.9rem;border: 2px solid #e8e8e8;background-color: #f7f7f7;padding:.5rem;display:block;background:#f7f7f7;height:100%;}'
          const buttonStyle = '.maker-badge__btn{display:inline-block;height:40px;line-height:40px;padding: 0 .5rem;cursor:pointer;border:2px solid #e8e8e8;border-bottom:0;background:#f7f7f7;}'
          const statsListStyle = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}'
          const buttonImgStyle = '.maker-badge__btn-img {border-radius: 50%;}'
          this.style.innerHTML = buttonImgStyle + statsListStyle + borderBxStyle + containerStyle + contentStyle + buttonStyle + profileLinkStyle + isOpenStyle;
      }
      //style option 2
      if (this.theme === 2) {
        var profileLinkStyle = ".ph-btn{margin: 0 auto;\
          height: 30px; \
          width: 30px; \
          text-align: center; \
          line-height: 30px;\
          background: #da552f;\
          display: block;\
          border-radius: 50%;\
          font-size: 1rem;\
          color: #fff;\
          text-decoration: none;\
          font-weight: 800;}";
          const borderBxStyle = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}'
          const containerStyle = '.maker-badge{font-size:16px;font-family:helvetica;text-align:right;height:200px;min-width:160px;transition: all .3s ease;position:fixed;bottom:-160px;'+this.position+':0;border-top-left-radius:6px;}';
          const contentStyle = '.maker-badge__content{text-align:center;font-size:.9rem;border: 1px solid #eaeaea;padding:.5rem;display:block;background:#fdfdfd;height:100%;}'
          const buttonStyle = '.maker-badge__btn{display:flex;justify-content:center;align-items:center;height:40px;line-height:40px;padding: 0 .5rem;cursor:pointer;border:1px solid #eaeaea;border-bottom:0;background:#fdfdfd;border-top-left-radius:6px;color:#767676;}'
          const statsListStyle = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}'
          const buttonImgStyle = '.maker-badge__btn-img {border-radius: 50%;}'
          this.style.innerHTML = buttonImgStyle + statsListStyle + borderBxStyle + containerStyle + contentStyle + buttonStyle + profileLinkStyle + isOpenStyle;
      }
      if (this.theme === 3) {
        isOpenStyle = '.isOpen{bottom: calc(0px + 80px);}'
        var profileLinkStyle = ".ph-btn{margin: 0 auto;\
          height: 30px; \
          width: 30px; \
          text-align: center; \
          line-height: 30px;\
          background: #da552f;\
          display: block;\
          border-radius: 50%;\
          font-size: 1rem;\
          color: #fff;\
          text-decoration: none;\
          font-weight: 800;}";
          const borderBxStyle = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}'
          const containerStyle = '.maker-badge{font-size:16px;font-family:helvetica;text-align:right;height:200px;min-width:160px;transition: all .3s ease;position:fixed;bottom:-120px;'+this.position+':0;border-top-left-radius:6px;}';
          const contentStyle = '.maker-badge__content{text-align:center;font-size:.9rem;border: 1px solid #eaeaea;padding:.5rem;display:block;background:#fdfdfd;height:100%;}'
          const buttonStyle = '.maker-badge__btn{\
                              display: inline-flex;\
                              justify-content: right;\
                              align-items: center;\
                              cursor: pointer;\
                              position: relative;\
                              text-align: center;\
                              width: 80px;\
                              height: 80px;\
                              border-radius: 50%;\
                              transition: transform .3s ease;}\
                              .maker-badge__btn:hover{transform: rotate(20deg)}'
          const statsListStyle = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}';
          const buttonImgStyle = '.maker-badge__btn-img {\
                                  border-radius: 50%;\
                                  width: 50px;\
                                  position: absolute;\
                                  top: 0;\
                                  right: 0;\
                                  left: 0;\
                                  bottom: 0;\
                                  margin: auto;}'
          this.style.innerHTML = buttonImgStyle + statsListStyle + borderBxStyle + containerStyle + contentStyle + buttonStyle + profileLinkStyle + isOpenStyle;
      }

    }

}

/** * MakerBadge Constructor */

function MakerBadge(settings){

  this.userId = ''
  if (settings.id){
    this.userId = settings.id
  }
  this.position = 'right'
  if (settings.position){
    this.position=settings.position
  }

  this.theme = 1
  if (settings.theme){
    this.theme= settings.theme;
  }

  this.name=''
  if (settings.name){
    this.name=settings.name
  }

  this.twitter = ''
  if (settings.twitter){
    this.twitter = settings.twitter
  }

  //only using pic in theme 2
  this.pic=''
  if (this.theme != 1) {
    if (settings.pic) {
      this.pic = settings.pic;
    }
  }


  this.run()
}

