import db from "../config/db.config.js";


const User = function(user) {
  this.user_name = blog.blogTitle;
  this.user_email = blog.blogBody;
  this.user_password = blog.blogTitle.toLowerCase().trim().replace(/ /g, '-');
};

export default User;