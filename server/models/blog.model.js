import db from "../config/db.config.js";


const Blog = function(blog) {
  this.blog_title = blog.blogTitle;
  this.blog_body = blog.blogBody;
  this.blog_slug = blog.blogTitle.toLowerCase().trim().replace(/ /g, '-');
  console.log(this.blog_slug)
};

Blog.getAll = () => {
  return new Promise((res, rej) => {
    const sqlGet = "SELECT * FROM blogs";
    db.query(sqlGet, (err, results) => {
      if (err) return rej(err);
      return res(results)
    })
  })
};
// Blog.getAll = result => {
//   const sqlGet = "SELECT * FROM blogs";
//   db.query(sqlGet, (err, res) => {
//     if (err) {
//         result(null, err);
//         return;
//     }

//     // console.log("blogs: ", res);
//     result(null, res);
//   });
// };
      
Blog.create = (newBlog, result) => {
  const sqlInsert = "INSERT INTO blogs SET ?";
  db.query(sqlInsert, newBlog, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    console.log("created blog: ", { id: res.insertId, ...newBlog });
    result(null, { id: res.insertId, ...newBlog });
  });
};

Blog.delete = (blogId, result) => {
  const sqlDelete = "DELETE FROM blogs WHERE blog_id = ?";
  db.query(sqlDelete, blogId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    if (res.affectedRows == 0) {
      // not found Blog with the id
      result({ kind: "not_found" }, null);
      return;
    }
    
    // console.log("deleted blog with id: ", blogId);
    result(null, res);
  });
};

// PROMISE
Blog.findById = (blogId) => {
  return new Promise((res, rej) => {
    const sqlSelect = "SELECT * FROM blogs WHERE blog_id = ?";
    db.query(sqlSelect, blogId, (err, results) => {
      if (err) return rej(err);
      // console.log('00', results)
      return res(results)
    })
  })
};

Blog.findBySlug = (blogSlug) => {
  return new Promise((res, rej) => {
    const sqlSelect = "SELECT * FROM blogs WHERE blog_slug = ?";
    db.query(sqlSelect, blogSlug, (err, results) => {
      if (err) return rej(err);
      // console.log('00', results)
      return res(results[0])
    })
  })
};



// ORIGINAL
// Blog.findById = (blogId, result) => {
//   const sqlSelect = "SELECT * FROM blogs WHERE id = ?";
//   db.query(sqlSelect, blogId, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
    
//     if (res.length) {
//       console.log("found blog: ", res[0]);
//       result(null, res[0]);
//       return;
// }

//   // no Blog found with the id
//   result({ kind: "not_found" }, null);
//   });
// };

/* 


Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};



Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};
*/
export default Blog;