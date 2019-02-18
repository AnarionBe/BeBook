(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(n,o,e){var r=e(109);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(47)(r,i);r.locals&&(n.exports=r.locals)},109:function(n,o,e){o=n.exports=e(46)(!1);var r=e(110)(e(111));o.push([n.i,'@charset "UTF-8";\n/* Style Header */\nheader {\n  background-color: #242626;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n/*Logo gauche */\n.logo {\n  margin-left: 16px;\n  padding: 9px;\n  width: 152px; }\n  .logo img {\n    width: 100%; }\n\n/* barre de navigation */\n.headerMenu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 42%; }\n  .headerMenu li {\n    list-style: none;\n    font-family: Roboto, serif;\n    color: #EBEBEB;\n    font-size: 18px; }\n    .headerMenu li:hover {\n      transition: color linear 0.3s;\n      color: #61C2D0;\n      cursor: pointer; }\n\n.fa-search:hover {\n  transition: color linear 0.3s;\n  color: #61C2D0;\n  cursor: pointer; }\n\n/* menu déroulant tags */\n.tagsMenu {\n  display: none;\n  position: absolute;\n  text-align: left;\n  background-color: #242626;\n  padding: 25px; }\n\n.submenu:hover .tagsMenu {\n  display: flex;\n  justify-content: space-between;\n  min-width: 250px;\n  z-index: 1;\n  font-family: Roboto, serif; }\n\n.fa-angle-right {\n  font-size: 16px;\n  margin-left: 2px; }\n\n.submenu:hover .fa-angle-right {\n  transform: rotate(90deg);\n  transition: transform 0.4s linear; }\n\n.tagsMenu li {\n  margin: 5px 0; }\n\n/* Barre de recherche */\n.searchBar input {\n  margin-right: 10px;\n  width: 70%;\n  background-color: #C4C4C4;\n  border: 1px solid #C4C4C4;\n  border-radius: 9px;\n  height: 25px; }\n  .searchBar input:hover {\n    transition: border linear 0.3s;\n    border: 1px solid #61C2D0; }\n\n.searchBar {\n  color: black; }\n\n.fa-search {\n  color: #EBEBEB;\n  font-size: 24px;\n  vertical-align: bottom; }\n\n/* Avatar */\n.avatar {\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  margin-right: 10px; }\n\n.bookpane-btn {\n  background: none;\n  border: none;\n  text-align: unset;\n  color: #C4C4C4; }\n\n.disabled {\n  box-shadow: unset !important;\n  opacity: .5;\n  transition: .3s all ease-in-out; }\n  .disabled:hover {\n    opacity: .8; }\n\n.bookpane {\n  margin: 1rem;\n  position: relative;\n  background-color: #EBEBEB;\n  color: #242626;\n  height: 8rem;\n  display: flex;\n  width: 22rem;\n  border-radius: 12px;\n  box-shadow: -4px 6px 8px rgba(0, 0, 0, 0.25);\n  border: 2px solid #363737;\n  transition: .3s all ease-in-out; }\n  .bookpane:hover {\n    border: 2px solid #61C2D0; }\n  .bookpane:hover .stars-wrap {\n    opacity: 1; }\n\n.booktext {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: .5rem 0 .5rem 1rem; }\n  .booktext h3 {\n    font-size: 1rem;\n    width: 14rem; }\n\n.okay {\n  color: #33931B; }\n\n.warning {\n  color: #D14242;\n  position: relative; }\n\n.until {\n  position: absolute;\n  top: 1.7rem;\n  left: 9.7rem;\n  width: 4rem;\n  text-align: right; }\n\n.bookcover {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\n.stars-wrap {\n  display: flex;\n  justify-content: space-around;\n  background-color: #242626ec;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: .25rem 0;\n  margin-bottom: .5rem;\n  width: 31.7%;\n  opacity: 0;\n  transition: .6s all ease-in-out; }\n\n.stars {\n  height: .7rem;\n  color: #D14242; }\n\n.block-ellipsis {\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  max-height: 2em;\n  margin: 0 auto;\n  line-height: 1em;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.lateral-menu {\n  background-color: #343535;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  padding: 3rem .5rem;\n  top: 4.05rem;\n  right: 0;\n  min-width: 18rem;\n  min-height: 60%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  transition: .7s all ease-in-out; }\n\n.out {\n  right: -25rem; }\n\n.lateral-bookpane {\n  margin: 1rem 0;\n  display: flex; }\n  .lateral-bookpane .bookcover {\n    width: 3rem;\n    border-radius: 5px; }\n  .lateral-bookpane h4 {\n    width: 9rem;\n    font-weight: 100; }\n  .lateral-bookpane .block-ellipsis {\n    max-height: 4em;\n    -webkit-line-clamp: 4; }\n\na .my-profile {\n  color: #61C2D0;\n  font-weight: 600;\n  margin-bottom: 1rem; }\n  a .my-profile:hover {\n    color: #C4C4C4; }\n\n.status {\n  margin-bottom: 2rem; }\n\n.scale {\n  transition: .2s all ease-in-out; }\n  .scale:hover {\n    transform: scale(1.1); }\n\n.warning-border {\n  border: 1px solid #D14242;\n  border-radius: 5px;\n  margin-bottom: 2rem;\n  padding: 1rem; }\n  .warning-border .status {\n    margin-bottom: 0; }\n\n.bookpage-container {\n  width: 1130px;\n  background-color: #C4C4C4;\n  border-radius: 43px;\n  margin: 50px auto;\n  padding: 50px;\n  font-family: "Roboto", serif; }\n\n.bookpage-info {\n  text-align: justify;\n  display: inline-block; }\n  .bookpage-info img {\n    width: 197px;\n    display: inline-block; }\n\n.bookpage-text {\n  display: inline-block;\n  margin-left: 25px;\n  vertical-align: top; }\n\n.bookpage-info p {\n  width: 517px;\n  font-size: 12px; }\n\n.bookpage-info h2 {\n  width: 510px;\n  font-size: 24px;\n  margin-bottom: 25px; }\n\n.bookpageRef {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 70px;\n  font-size: 24px; }\n  .bookpageRef h2 {\n    font-size: 24px;\n    margin-bottom: 10px; }\n\n.availableTag {\n  color: green;\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 10px; }\n\n.borrowButton {\n  font-variant: small-caps;\n  font-weight: bold;\n  background-color: #61C2D0;\n  border: 1px solid #61C2D0;\n  width: 125px;\n  height: 46px;\n  text-align: center;\n  border-radius: 9px;\n  font-size: 20px;\n  margin-top: 25px;\n  box-shadow: 2px 2px 2px #888888;\n  transition: all 0.2s ease-in-out; }\n  .borrowButton:hover {\n    transform: scale(1.1);\n    cursor: pointer; }\n\n.bookpageReviews {\n  width: 100%;\n  margin-top: 30px; }\n  .bookpageReviews h6 {\n    font-weight: 400;\n    margin: 10px; }\n  .bookpageReviews p {\n    font-size: 12px;\n    text-align: justify; }\n  .bookpageReviews .stars-wrap {\n    display: block;\n    background-color: rgba(255, 255, 255, 0);\n    position: relative;\n    bottom: 10px;\n    left: 0;\n    padding: 0;\n    margin: 0;\n    opacity: 1; }\n\n.addReview {\n  transition: all 0.2s ease-in-out;\n  margin-top: 20px;\n  border-radius: 9px;\n  border: 1px solid #363737;\n  background-color: #363737;\n  color: white;\n  width: 150px;\n  height: 35px;\n  font-size: 16px;\n  font-variant: small-caps;\n  font-style: "Roboto",serif; }\n  .addReview:hover {\n    cursor: pointer;\n    transform: scale(1.1); }\n\n.reviewModale {\n  display: none;\n  background-color: rgba(255, 255, 255, 0.9);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n.reviewForm {\n  width: 1130px;\n  border-radius: 43px;\n  margin: 150px auto;\n  padding: 50px;\n  background-color: white; }\n  .reviewForm textarea {\n    width: 1090px;\n    min-height: 302px;\n    border: none;\n    border-radius: 22px;\n    margin: 25px auto;\n    background-color: #C4C4C4;\n    padding: 20px;\n    resize: none;\n    font-family: roboto;\n    font-size: 24px;\n    color: black; }\n  .reviewForm button {\n    background-color: black;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    display: inline-block;\n    float: right;\n    transition: all 0.2s ease-in-out; }\n    .reviewForm button:hover {\n      cursor: pointer;\n      transform: scale(1.1); }\n  .reviewForm h2 {\n    display: inline-block;\n    font-size: 24px;\n    font-family: "Roboto", serif;\n    width: 505px; }\n\n.reviewForm-top {\n  margin-top: 10px; }\n  .reviewForm-top .stars {\n    vertical-align: baseline; }\n\n.selectForm {\n  position: relative;\n  display: inline-block; }\n  .selectForm select {\n    width: 55px;\n    margin-left: 10px;\n    background-color: #363737;\n    color: white;\n    font-family: inherit;\n    outline: none;\n    border-radius: 9px;\n    border: none;\n    padding: 3px; }\n\n.reviewForm-top p,\n.reviewForm-top select {\n  display: inline-block; }\n\n.selectForm:after {\n  content: "▼";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 60%;\n  line-height: 30px;\n  padding: 0 7px;\n  background: #363737;\n  color: white;\n  pointer-events: none;\n  border-radius: 9px; }\n\n.reviewForm-right {\n  margin-left: 100px; }\n\n.JuniorDashboard-container {\n  width: 40rem;\n  background-color: #C4C4C4;\n  border-radius: 30px;\n  margin: 2rem auto;\n  padding: 2rem;\n  font-family: "Roboto", serif;\n  display: flex;\n  justify-content: space-between; }\n\n.profilePic {\n  width: 20rem;\n  height: 20rem;\n  border-radius: 10%; }\n\n.profileInfo {\n  width: 16rem;\n  font-size: 20px; }\n  .profileInfo p {\n    margin: 5px auto; }\n\n.modifyProfile {\n  display: none; }\n\n.modifyInput input {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  border: none;\n  height: 25px;\n  padding: 5px;\n  color: black;\n  margin: 5px auto;\n  font-size: 17px; }\n\n.modifyButton, .profileToggleBack, .submitProfile {\n  transition: all 0.2s ease-in-out;\n  margin-top: 10px;\n  border-radius: 9px;\n  border: 1px solid #363737;\n  background-color: #363737;\n  color: white;\n  width: 150px;\n  height: 35px;\n  font-size: 16px;\n  font-variant: small-caps;\n  font-style: "Roboto",serif; }\n  .modifyButton:hover, .profileToggleBack:hover, .submitProfile:hover {\n    transform: scale(1.1);\n    cursor: pointer; }\n\n.profileToggleBack {\n  display: none; }\n\n.loginPage {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('+r+");\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0); }\n\n.login {\n  width: 376px;\n  height: 265px;\n  margin: 180px auto;\n  background-color: rgba(36, 38, 38, 0.95);\n  border-radius: 29px;\n  font-family: \"Puritan\", serif;\n  color: #61C2D0;\n  border: 1px solid rgba(36, 38, 38, 0.95); }\n  .login form {\n    width: 240px;\n    margin: auto;\n    font-size: 18px; }\n  .login h2 {\n    font-weight: 400;\n    font-size: 36px;\n    margin: 17px 15px; }\n  .login h3 {\n    font-weight: 400;\n    margin: 5px 0;\n    font-size: 24px; }\n\n.input input {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 7px;\n  border: none;\n  height: 25px;\n  color: white; }\n\n.submit {\n  float: right;\n  font-variant: small-caps;\n  font-weight: bold;\n  color: #363737;\n  background-color: #61C2D0;\n  border: 1px solid #61C2D0;\n  width: 125px;\n  height: 30px;\n  text-align: center;\n  border-radius: 9px;\n  font-size: 20px;\n  margin-top: 25px;\n  transition: all .3s ease-in-out; }\n  .submit:hover {\n    transform: scale(1.1);\n    cursor: pointer; }\n\n.table {\n  background-color: #EBEBEB;\n  color: #242626;\n  padding: .3rem 1rem; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\nbody, html {\n  background-color: #363737;\n  font-family: Impact, 'Arial Narrow Bold', sans-serif; }\n\na {\n  text-decoration: none; }\n\n.container {\n  margin: 3rem 0 0 5rem;\n  display: flex;\n  flex-wrap: wrap; }\n",""])},74:function(n,o,e){n.exports=e(75)}},[[74,56,13,10,12,14,11,46,43,42,41,45,44,40,39,22,26,25,24,23,38,37,18,17,19,20,21,36,35,29,32,16,33,34,47,49,51,15,27,28,30,31,48,50,52,53,54,55,1,6,2,9,3,0,8,5,4]]]);