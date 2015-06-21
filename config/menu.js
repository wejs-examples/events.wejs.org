module.exports.menu = {
  main: {
    class: 'nav navbar-nav',
    links: [
      {
        beforeText: '<i class="fa fa-home"></i>',
        text: 'home',
        afterText: '',
        type: 'route',
        name: 'main.index'
      },
      {
        beforeText: '<i class="fa fa-location-arrow"></i>',
        text: 'conference.find',
        afterText: '',
        type: 'route',
        name: 'conference.find'
      },
      // {
      //   beforeText: '<i class="fa fa-users"></i>',
      //   text: 'users.link',
      //   afterText: '',
      //   type: 'route',
      //   name: 'user_manage'
      // },
      // {
      //   beforeText: '<i class="fa fa-unlock-alt"></i>',
      //   text: 'permission.link',
      //   afterText: '',
      //   type: 'route',
      //   name: 'permission_manage'
      // },
    ]
  }
};