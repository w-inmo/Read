const messages = {
  home: {
    title: '书城',
    hint: '计算机科学和软件工程',
    guessYouLike: '猜你喜欢',
    change: '换一批',
    clear: '清空',
    hotSearch: '热门搜索',
    historySearch: '搜索历史',
    sameAuthor: '与$1同作者',
    sameReader: '对$1感兴趣的人也在读',
    readPercent: '阅读$2的人，$1都在读',
    recommend: '热门推荐',
    seeAll: '查看全部',
    readers: '$1人同时在读',
    featured: '精选',
    category: '分类',
    books: '本书',
    readNow: '立即阅读',
    allBook: '共 $1 本图书'
  },
  category: {
    computerScience: '计算机科学',
    socialSciences: '社会科学',
    economics: '经济学',
    education: '教育学',
    engineering: '工程学',
    environment: '环境学',
    geography: '地理学',
    history: '历史学',
    laws: '法学',
    lifeSciences: '生命科学',
    literature: '文学',
    biomedicine: '生物医学',
    businessandManagement: '工商管理',
    earthSciences: '地球科学',
    materialsScience: '材料科学',
    mathematics: '数学',
    medicineAndPublicHealth: '公共卫生',
    philosophy: '哲学',
    physics: '物理',
    politicalScienceAndInternationalRelations: '国际关系',
    psychology: '心理学',
    statistics: '统计学'
  },
  shelf: {
    title: '书架',
    edit: '编辑',
    cancel: '取消',
    search: '搜索',
    private: '私密阅读',
    noPrivate: '关闭私密阅读',
    download: '开启离线',
    move: '移动到...',
    remove: '移出书架',
    setPrivateTitle: '开启后，所选书籍的阅读记录将不会对外公开',
    open: '开启',
    closePrivateTitle: '是否关闭所选书籍的私密阅读？',
    close: '关闭',
    setPrivateSuccess: '已开启私密阅读<br>阅读记录将不再公开',
    closePrivateSuccess: '已关闭私密阅读',
    setDownloadTitle: '开启后，将自动缓存所选书籍内容',
    setDownloadSuccess: '已开启，将自动离线已购内容',
    setDownloadError: '离线下载异常，请重新尝试',
    removeDownloadTitle: '确认后，将删除所选书籍的离线内容',
    removeDownloadSuccess: '已选书籍的离线内容已删除',
    delete: '删除',
    clearCache: '清除缓存',
    clearCacheSuccess: '缓存已清空',
    removeBookTitle: '是否将$1移出书架？',
    removeBook: '移出',
    selectedBooks: '所选书籍',
    default: '默认',
    progress: '按进度',
    purchase: '按购买',
    bought: '已购买',
    notPurchased: '未购买',
    selectBook: '选择书籍',
    haveSelectedBook: '已选择$1本',
    haveSelectedBooks: '已选择$1本',
    moveBook: '移动书籍',
    newGroup: '新建分组',
    groupOut: '移出分组',
    editGroup: '修改分组',
    editGroupName: '修改分组名',
    deleteGroup: '删除分组',
    deleteGroupTitle: '删除分组后，分组内的书籍将会自动移出分组',
    groupNone: '当前分组暂无书籍',
    groupName: '分组名',
    confirm: '确定',
    moveBookInSuccess: '成功移入$1',
    moveBookOutSuccess: '成功移出分组',
    statistic: '$1本公开阅读 • $2本私密阅读',
    startDownload: '开始下载...',
    progressDownload: '正在下载：$1',
    downloadFirst: '请先缓存图书',
    welcome: '欢迎访问慕课网<br>学习《实战微信读书——媲美原生APP的企业级Web书城》<br>--------  作者：Sam  --------',
    find: '去找书',
    changeLanguage: '切换语言'
  },
  detail: {
    copyright: '版权',
    navigation: '目录',
    publisher: '出版社',
    category: '分类',
    ISBN: 'ISBN',
    trial: '试读',
    lang: '语言',
    loading: '加载中...',
    read: '阅读',
    listen: '听书',
    addToBookshelf: '加入书架',
    removeFromBookshelf: '从书架移除',
		cn: '中文',
		en: '英文'
  },
  speak: {
    voice: '语音朗读',
    read: '查看原文',
    settings: '设置',
    timing: '定时',
    current: '当前章节',
    requestFailed: '请求失败!',
    apply: '语义解析核心技术由科大讯飞提供'
  },
  book: {
    // pulldownAddMark: '下拉添加书签',
    pulldownAddMark: '添加书签',
    releaseAddMark: '松手添加书签',
    // pulldownDeleteMark: '下拉删除书签',
    pulldownDeleteMark: '删除书签',
    releaseDeleteMark: '松手删除书签',
    selectFont: '选择字体',
    haveRead: '已读$1分钟',
    themeDefault: '默认',
    themeGold: '雅致',
    themeEye: '护眼',
    themeNight: '夜间',
    loading: '加载中...',
    navigation: '目录',
    bookmark: '书签',
    searchHint: '搜索全书内容',
    haveRead2: '已读',
    minutes: '分钟',
    cancel: '取消'
  }
}

export default messages
