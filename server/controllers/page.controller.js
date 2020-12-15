import Page from "../models/page.model.js";

// ADMIN
// getPages is used in both ADMIN and SITE
export const getPages = async (req, res) => {
    try {
        const pages = await Page.findAll({
            attributes: [
                'page_id',
                'page_title',
                'page_body',
                'page_slug',
                'page_metadata_keywords',
                'page_metadata_description',
                'page_search_keywords'
            ]
        });

        res.send(pages)
    } catch (error) {
        console.log(error)
    }
};

export const addPage = async (req, res) => {    
    const { pageTitle, pageBody, pageSlug, metaKeywords, metaDescription, searchKeywords } = req.body; 
    try {     
        const newPage = await Page.create({
            page_title: pageTitle,
            page_body: pageBody,
            page_slug: pageSlug,
            site_id: req.user.site_id,
            // site_name: req.user.site_name,
            page_metadata_keywords: metaKeywords,
            page_metadata_description: metaDescription,
            page_search_keywords: searchKeywords
        });  
        
        res.status(200).send(newPage)
    } catch (error) {
        console.log(error)
    }
};

export const deletePage = async (req, res) => {
    const  { pageId } = req.params;  
    try {
        await Page.destroy({ where: { page_id: pageId }})

        res.status(200).send({ message: "Page deleted" })
        
    } catch (error) {
        console.log(error)
    }
};

export const updatePageById = async (req,res) => {
    const { pageId } = req.params;
    const { pageTitle, pageBody, pageSlug, metaKeywords, metaDescription, searchKeywords} = req.body;
  
    try {
      const page = await Page.findOne({ where: { page_id: pageId }});
      
      if (page.page_title !== pageTitle) page.page_title = pageTitle;
      if (page.page_body !== pageBody) page.page_body = pageBody;
      if (page.page_body !== pageBody) page.page_body = pageBody;
      
      if (page.page_slug !== pageSlug) page.page_slug = pageSlug;
      if (page.page_metadata_keywords !== metaKeywords) page.page_metadata_keywords = metaKeywords;
      if (page.page_metadata_description !== metaDescription) page.page_metadata_description = metaDescription;
      if (page.page_search_keywords !== searchKeywords) page.page_search_keywords = searchKeywords;
      
      await page.save()
      
      res.send(page)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getPageById = async (req, res) => {
    const { pageId } = req.params;
    try {
        const page = await Page.findOne({ where: { page_id: pageId }});

        !page ? res.status(404).json({ error: 'No page with ID provided' }) : res.status(200).send(page)
    } catch (error) {
        console.log(error)
    }
};