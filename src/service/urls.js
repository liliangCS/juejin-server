// 文章分类
exports.categoryUrl = "/tag_api/v1/query_category_briefs?aid=2608&uuid=7007808088838669835"
// 文章列表（根据分类，标签为全部）
exports.articleListUrl = "/recommend_api/v1/article/recommend_cate_feed?aid=2608&uuid=7007808088838669835"
// 文章列表（综合，包括广告）
exports.articleListUrl2 = "/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7007808088838669835"
// 文章列表（根据分类 + 标签）
exports.articleListUrl3 = "/recommend_api/v1/article/recommend_cate_tag_feed?aid=2608&uuid=7007808088838669835"
// 文章评论
exports.commentsUrl = "/interact_api/v1/comment/list?aid=2608&uuid=7007808088838669835"
// 作者榜
exports.authorRankUrl = "/user_api/v1/author/recommend?aid=2608&uuid=7007808088838669835&cursor=0&limit=20"
// 分类下的标签
exports.tagUrl = "/recommend_api/v1/tag/recommend_tag_list?aid=2608&uuid=7007808088838669835"
// 文章专栏
exports.articleColumnUrl = "/content_api/v1/article/column?aid=2608&uuid=7007808088838669835"
// 相关文章
exports.similarArticleUrl = "/recommend_api/v1/article/recommend_article_detail_feed?aid=2608&uuid=7007808088838669835"
// 相关推荐
exports.recommendArticleUrl = "/recommend_api/v1/article/recommend_tag_feed?aid=2608&uuid=7007808088838669835"