'use strict';

/**
 * City.js controller
 *
 * @description: A set of functions called "actions" for managing `City`.
 */

module.exports = {

  /**
   * Retrieve city records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.city.search(ctx.query);
    } else {
      // let cc = [
      //   {
      //     'country': 'RS',
      //     'name': 'Zvečka',
      //     'lat': '44.64025',
      //     'lng': '20.16432'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žujince',
      //     'lat': '42.31568',
      //     'lng': '21.70212'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zrenjanin',
      //     'lat': '45.38361',
      //     'lng': '20.38194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žitorađa',
      //     'lat': '43.19',
      //     'lng': '21.71306'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žitište',
      //     'lat': '45.485',
      //     'lng': '20.54972'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zemun',
      //     'lat': '44.84306',
      //     'lng': '20.40111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zaječar',
      //     'lat': '43.90358',
      //     'lng': '22.26405'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žagubica',
      //     'lat': '44.19685',
      //     'lng': '21.78838'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žabari',
      //     'lat': '44.35611',
      //     'lng': '21.215'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Žabalj',
      //     'lat': '45.37222',
      //     'lng': '20.06389'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vršac',
      //     'lat': '45.11667',
      //     'lng': '21.30361'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vrnjačka Banja',
      //     'lat': '43.62725',
      //     'lng': '20.89634'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vranjska Banja',
      //     'lat': '42.555',
      //     'lng': '21.99222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vranje',
      //     'lat': '42.55139',
      //     'lng': '21.90028'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vranić',
      //     'lat': '44.60237',
      //     'lng': '20.32872'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vračar',
      //     'lat': '44.79256',
      //     'lng': '20.47491'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vojvoda Stepa',
      //     'lat': '45.68537',
      //     'lng': '20.65536'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vojka',
      //     'lat': '44.93713',
      //     'lng': '20.15236'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vlasotince',
      //     'lat': '42.96697',
      //     'lng': '22.13402'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vlajkovac',
      //     'lat': '45.07207',
      //     'lng': '21.19945'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vladimirovac',
      //     'lat': '45.03122',
      //     'lng': '20.86566'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vladičin Han',
      //     'lat': '42.70778',
      //     'lng': '22.06333'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vilovo',
      //     'lat': '45.24859',
      //     'lng': '20.15521'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Veliko Središte',
      //     'lat': '45.17919',
      //     'lng': '21.40353'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Veliko Gradište',
      //     'lat': '44.76203',
      //     'lng': '21.51578'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Veliki Gaj',
      //     'lat': '45.28849',
      //     'lng': '21.17057'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Aleksandrovo',
      //     'lat': '45.63755',
      //     'lng': '20.59288'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Velika Plana',
      //     'lat': '44.33389',
      //     'lng': '21.07676'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Velika Moštanica',
      //     'lat': '44.66486',
      //     'lng': '20.35395'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Velika Greda',
      //     'lat': '45.24376',
      //     'lng': '21.03498'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Varvarin',
      //     'lat': '43.72397',
      //     'lng': '21.3624'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Uzdin',
      //     'lat': '45.20512',
      //     'lng': '20.62342'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Umka',
      //     'lat': '44.67806',
      //     'lng': '20.30472'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Uljma',
      //     'lat': '45.04213',
      //     'lng': '21.15393'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ugrinovci',
      //     'lat': '44.87635',
      //     'lng': '20.18763'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ub',
      //     'lat': '44.45611',
      //     'lng': '20.07389'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Tutin',
      //     'lat': '42.99028',
      //     'lng': '20.33139'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Turija',
      //     'lat': '44.52273',
      //     'lng': '21.63945'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Trstenik',
      //     'lat': '43.61694',
      //     'lng': '21.0025'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Trgovište',
      //     'lat': '42.36417',
      //     'lng': '22.0825'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Torda',
      //     'lat': '45.58423',
      //     'lng': '20.459'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Topola',
      //     'lat': '44.25417',
      //     'lng': '20.6825'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Tomaševac',
      //     'lat': '45.26855',
      //     'lng': '20.62272'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Toba',
      //     'lat': '45.68943',
      //     'lng': '20.55714'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Titel',
      //     'lat': '45.20611',
      //     'lng': '20.29444'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Taraš',
      //     'lat': '45.46737',
      //     'lng': '20.19867'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Svrljig',
      //     'lat': '43.41333',
      //     'lng': '22.12111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Svilajnac',
      //     'lat': '44.2337',
      //     'lng': '21.1967'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sutjeska',
      //     'lat': '45.38312',
      //     'lng': '20.6962'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Surdulica',
      //     'lat': '42.69056',
      //     'lng': '22.17083'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Surduk',
      //     'lat': '45.07474',
      //     'lng': '20.31898'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Surčin',
      //     'lat': '44.79306',
      //     'lng': '20.28028'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stubline',
      //     'lat': '44.57476',
      //     'lng': '20.13477'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stepojevac',
      //     'lat': '44.51278',
      //     'lng': '20.295'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stari Lec',
      //     'lat': '45.28401',
      //     'lng': '20.96433'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stari Banovci',
      //     'lat': '44.9842',
      //     'lng': '20.28382'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stara Pazova',
      //     'lat': '44.985',
      //     'lng': '20.16083'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stajićevo',
      //     'lat': '45.29489',
      //     'lng': '20.45845'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Srpski Itebej',
      //     'lat': '45.56715',
      //     'lng': '20.7135'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Srpska Crnja',
      //     'lat': '45.72538',
      //     'lng': '20.69008'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sremčica',
      //     'lat': '44.67653',
      //     'lng': '20.39232'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sopot',
      //     'lat': '44.51972',
      //     'lng': '20.57361'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Soko Banja',
      //     'lat': '43.64333',
      //     'lng': '21.87111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Smederevska Palanka',
      //     'lat': '44.36548',
      //     'lng': '20.95885'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Smederevo',
      //     'lat': '44.66278',
      //     'lng': '20.93'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Šimanovci',
      //     'lat': '44.87393',
      //     'lng': '20.09175'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ševica',
      //     'lat': '44.50883',
      //     'lng': '21.72296'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Senta',
      //     'lat': '45.9275',
      //     'lng': '20.07722'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Seleuš',
      //     'lat': '45.1277',
      //     'lng': '20.91461'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sefkerin',
      //     'lat': '45.00501',
      //     'lng': '20.48256'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sečanj',
      //     'lat': '45.36667',
      //     'lng': '20.77222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sanad',
      //     'lat': '45.97596',
      //     'lng': '20.10816'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Samoš',
      //     'lat': '45.20255',
      //     'lng': '20.77392'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Samoljica',
      //     'lat': '42.38445',
      //     'lng': '21.73708'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sakule',
      //     'lat': '45.14667',
      //     'lng': '20.48619'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Šajkaš',
      //     'lat': '45.27315',
      //     'lng': '20.09051'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sajan',
      //     'lat': '45.84227',
      //     'lng': '20.27815'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rušanj',
      //     'lat': '44.68477',
      //     'lng': '20.44993'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rekovac',
      //     'lat': '43.863',
      //     'lng': '21.09345'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ražanj',
      //     'lat': '43.67222',
      //     'lng': '21.54944'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ravni Topolovac',
      //     'lat': '45.46082',
      //     'lng': '20.56939'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rakovica',
      //     'lat': '44.74194',
      //     'lng': '20.44139'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rajince',
      //     'lat': '42.3787',
      //     'lng': '21.69591'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Radovnica',
      //     'lat': '42.43364',
      //     'lng': '22.22861'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Radojevo',
      //     'lat': '45.74617',
      //     'lng': '20.78917'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Radenka',
      //     'lat': '44.58345',
      //     'lng': '21.76469'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rača',
      //     'lat': '44.22712',
      //     'lng': '20.97754'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Prokuplje',
      //     'lat': '43.23417',
      //     'lng': '21.58806'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Preševo',
      //     'lat': '42.30917',
      //     'lng': '21.64917'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Požega',
      //     'lat': '43.84889',
      //     'lng': '20.03632'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Požarevac',
      //     'lat': '44.62133',
      //     'lng': '21.18782'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Plandište',
      //     'lat': '45.22722',
      //     'lng': '21.12167'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Pirot',
      //     'lat': '43.15306',
      //     'lng': '22.58611'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Petrovac',
      //     'lat': '44.37694',
      //     'lng': '21.41917'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Perlez',
      //     'lat': '45.20813',
      //     'lng': '20.38197'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Pavliš',
      //     'lat': '45.10569',
      //     'lng': '21.23952'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Paraćin',
      //     'lat': '43.86083',
      //     'lng': '21.40778'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Pančevo',
      //     'lat': '44.87083',
      //     'lng': '20.64028'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Padina',
      //     'lat': '45.11988',
      //     'lng': '20.7286'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Padej',
      //     'lat': '45.82756',
      //     'lng': '20.16279'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ovča',
      //     'lat': '44.88349',
      //     'lng': '20.53336'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ostružnica',
      //     'lat': '44.72769',
      //     'lng': '20.31845'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ostojićevo',
      //     'lat': '45.88863',
      //     'lng': '20.16642'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Orlovat',
      //     'lat': '45.24171',
      //     'lng': '20.58089'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Opovo',
      //     'lat': '45.05222',
      //     'lng': '20.43028'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Obrenovac',
      //     'lat': '44.65486',
      //     'lng': '20.20017'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novo Miloševo',
      //     'lat': '45.71916',
      //     'lng': '20.30364'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Slankamen',
      //     'lat': '45.12554',
      //     'lng': '20.23914'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Pazar',
      //     'lat': '43.13667',
      //     'lng': '20.51222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kozjak',
      //     'lat': '45.18264',
      //     'lng': '20.86381'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Kozarci',
      //     'lat': '45.78241',
      //     'lng': '20.62289'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Kneževac',
      //     'lat': '46.05',
      //     'lng': '20.1'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Karlovci',
      //     'lat': '45.07636',
      //     'lng': '20.17948'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Itebej',
      //     'lat': '45.55918',
      //     'lng': '20.7003'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Beograd',
      //     'lat': '44.80556',
      //     'lng': '20.42417'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Bečej',
      //     'lat': '45.59861',
      //     'lng': '20.13556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Banovci',
      //     'lat': '44.95561',
      //     'lng': '20.28025'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nova Pazova',
      //     'lat': '44.94366',
      //     'lng': '20.21931'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nova Crnja',
      //     'lat': '45.66833',
      //     'lng': '20.605'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Niš',
      //     'lat': '43.32472',
      //     'lng': '21.90333'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nikolinci',
      //     'lat': '45.05245',
      //     'lng': '21.06695'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Neuzina',
      //     'lat': '45.3446',
      //     'lng': '20.71418'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Negotin',
      //     'lat': '44.22639',
      //     'lng': '22.53083'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nakovo',
      //     'lat': '45.87503',
      //     'lng': '20.56709'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Adorjan',
      //     'lat': '46.00333',
      //     'lng': '20.04007'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mošorin',
      //     'lat': '45.30196',
      //     'lng': '20.16919'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mol',
      //     'lat': '45.76457',
      //     'lng': '20.13286'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mokrin',
      //     'lat': '45.93362',
      //     'lng': '20.41215'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mladenovac',
      //     'lat': '44.43861',
      //     'lng': '20.69917'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Miratovac',
      //     'lat': '42.25846',
      //     'lng': '21.66456'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mionica',
      //     'lat': '44.25194',
      //     'lng': '20.08167'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mihajlovo',
      //     'lat': '45.47085',
      //     'lng': '20.41508'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Merošina',
      //     'lat': '43.28358',
      //     'lng': '21.7204'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Melenci',
      //     'lat': '45.5168',
      //     'lng': '20.31961'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Medveđa',
      //     'lat': '42.84306',
      //     'lng': '21.58333'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Međa',
      //     'lat': '45.53815',
      //     'lng': '20.80677'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Margita',
      //     'lat': '45.21598',
      //     'lng': '21.17527'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Malo Crniće',
      //     'lat': '44.55611',
      //     'lng': '21.28556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mala Moštanica',
      //     'lat': '44.63834',
      //     'lng': '20.306'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Majdanpek',
      //     'lat': '44.42771',
      //     'lng': '21.94596'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lukićevo',
      //     'lat': '45.33815',
      //     'lng': '20.49895'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lugavčina',
      //     'lat': '44.52314',
      //     'lng': '21.07083'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lučani',
      //     'lat': '43.86083',
      //     'lng': '20.13806'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lokve',
      //     'lat': '45.15198',
      //     'lng': '21.03073'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lok',
      //     'lat': '45.21583',
      //     'lng': '20.21222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ljukovo',
      //     'lat': '45.02604',
      //     'lng': '20.02737'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ljig',
      //     'lat': '44.23007',
      //     'lng': '20.23819'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Leskovac',
      //     'lat': '42.99806',
      //     'lng': '21.94611'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lebane',
      //     'lat': '42.92389',
      //     'lng': '21.7375'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lazarevo',
      //     'lat': '45.38893',
      //     'lng': '20.53999'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lazarevac',
      //     'lat': '44.38534',
      //     'lng': '20.2557'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lapovo',
      //     'lat': '44.18424',
      //     'lng': '21.09727'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lajkovac',
      //     'lat': '44.36944',
      //     'lng': '20.16528'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kuštilj',
      //     'lat': '45.03487',
      //     'lng': '21.37989'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kuršumlija',
      //     'lat': '43.13826',
      //     'lng': '21.27339'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kupinovo',
      //     'lat': '44.70708',
      //     'lng': '20.04959'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kumane',
      //     'lat': '45.53946',
      //     'lng': '20.22902'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kučevo',
      //     'lat': '44.4775',
      //     'lng': '21.67'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kruševac',
      //     'lat': '43.58',
      //     'lng': '21.33389'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Krčedin',
      //     'lat': '45.13871',
      //     'lng': '20.13308'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kraljevo',
      //     'lat': '43.72583',
      //     'lng': '20.68944'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Krajišnik',
      //     'lat': '45.45283',
      //     'lng': '20.72976'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kragujevac',
      //     'lat': '44.01667',
      //     'lng': '20.91667'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kovin',
      //     'lat': '44.7475',
      //     'lng': '20.97611'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kovilj',
      //     'lat': '45.23422',
      //     'lng': '20.02327'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kovačica',
      //     'lat': '45.11167',
      //     'lng': '20.62139'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Konak',
      //     'lat': '45.31575',
      //     'lng': '20.91468'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Knićanin',
      //     'lat': '45.18675',
      //     'lng': '20.319'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Klek',
      //     'lat': '45.42254',
      //     'lng': '20.48049'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kladovo',
      //     'lat': '44.60667',
      //     'lng': '22.61194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kikinda',
      //     'lat': '45.82972',
      //     'lng': '20.46528'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kanjiža',
      //     'lat': '46.06667',
      //     'lng': '20.05'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jermenovci',
      //     'lat': '45.18635',
      //     'lng': '21.0455'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jazovo',
      //     'lat': '45.89876',
      //     'lng': '20.2213'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jaša Tomić',
      //     'lat': '45.44725',
      //     'lng': '20.85546'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jarkovac',
      //     'lat': '45.26985',
      //     'lng': '20.76078'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Janošik',
      //     'lat': '45.17141',
      //     'lng': '21.00658'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jagodina',
      //     'lat': '43.97713',
      //     'lng': '21.26121'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Izbište',
      //     'lat': '45.02253',
      //     'lng': '21.18388'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ivanjica',
      //     'lat': '43.58028',
      //     'lng': '20.23111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Inđija',
      //     'lat': '45.04816',
      //     'lng': '20.08165'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ilandža',
      //     'lat': '45.16897',
      //     'lng': '20.92008'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Idvor',
      //     'lat': '45.18895',
      //     'lng': '20.51442'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Tiszahegyes',
      //     'lat': '45.82648',
      //     'lng': '20.31791'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Hetin',
      //     'lat': '45.66202',
      //     'lng': '20.79138'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Hajdučica',
      //     'lat': '45.2501',
      //     'lng': '20.96016'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gudurica',
      //     'lat': '45.16816',
      //     'lng': '21.44264'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Grocka',
      //     'lat': '44.67222',
      //     'lng': '20.7175'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Grabovac',
      //     'lat': '44.60049',
      //     'lng': '20.08539'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gornji Milanovac',
      //     'lat': '44.02603',
      //     'lng': '20.46152'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gornji Breg',
      //     'lat': '45.91995',
      //     'lng': '20.01766'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Golubinci',
      //     'lat': '44.98533',
      //     'lng': '20.06339'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Golubac',
      //     'lat': '44.65296',
      //     'lng': '21.63199'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gardinovci',
      //     'lat': '45.20359',
      //     'lng': '20.13558'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gadžin Han',
      //     'lat': '43.22278',
      //     'lng': '22.03194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Farkaždin',
      //     'lat': '45.19172',
      //     'lng': '20.47239'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Elemir',
      //     'lat': '45.44263',
      //     'lng': '20.30003'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ečka',
      //     'lat': '45.32328',
      //     'lng': '20.44294'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ðurđevo',
      //     'lat': '45.32591',
      //     'lng': '20.06532'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Duboka',
      //     'lat': '44.52223',
      //     'lng': '21.7603'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Donji Milanovac',
      //     'lat': '44.46417',
      //     'lng': '22.15217'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Doljevac',
      //     'lat': '43.19817',
      //     'lng': '21.83258'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Dobrica',
      //     'lat': '45.21339',
      //     'lng': '20.84995'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Dobanovci',
      //     'lat': '44.82631',
      //     'lng': '20.22487'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Dimitrovgrad',
      //     'lat': '43.01417',
      //     'lng': '22.77556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Despotovac',
      //     'lat': '44.0925',
      //     'lng': '21.44694'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Debeljača',
      //     'lat': '45.0707',
      //     'lng': '20.60153'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čurug',
      //     'lat': '45.47221',
      //     'lng': '20.06861'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ćuprija',
      //     'lat': '43.9275',
      //     'lng': '21.37'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čukarica',
      //     'lat': '44.7825',
      //     'lng': '20.42028'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Crna Trava',
      //     'lat': '42.80988',
      //     'lng': '22.29881'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Crepaja',
      //     'lat': '45.00984',
      //     'lng': '20.63702'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čortanovci',
      //     'lat': '45.1546',
      //     'lng': '20.01851'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čoka',
      //     'lat': '45.9425',
      //     'lng': '20.14333'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ćićevac',
      //     'lat': '43.71882',
      //     'lng': '21.44085'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čestereg',
      //     'lat': '45.56361',
      //     'lng': '20.53194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čenta',
      //     'lat': '45.10814',
      //     'lng': '20.38947'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čačak',
      //     'lat': '43.89139',
      //     'lng': '20.34972'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bujanovac',
      //     'lat': '42.45917',
      //     'lng': '21.76667'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Botoš',
      //     'lat': '45.30837',
      //     'lng': '20.63514'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bosilegrad',
      //     'lat': '42.5011',
      //     'lng': '22.47238'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bor',
      //     'lat': '44.07488',
      //     'lng': '22.09591'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Boljevci',
      //     'lat': '44.72355',
      //     'lng': '20.22348'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Boljevac',
      //     'lat': '43.83028',
      //     'lng': '21.95306'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Boka',
      //     'lat': '45.3554',
      //     'lng': '20.82987'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bojnik',
      //     'lat': '43.01224',
      //     'lng': '21.721'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bočar',
      //     'lat': '45.76994',
      //     'lng': '20.2839'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Blace',
      //     'lat': '43.29528',
      //     'lng': '21.28583'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Biljača',
      //     'lat': '42.35518',
      //     'lng': '21.74781'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Beška',
      //     'lat': '45.13092',
      //     'lng': '20.06698'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Belgrade',
      //     'lat': '44.80401',
      //     'lng': '20.46513'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Belo Blato',
      //     'lat': '45.27278',
      //     'lng': '20.375'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Belegiš',
      //     'lat': '45.01873',
      //     'lng': '20.33212'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bela Palanka',
      //     'lat': '43.21833',
      //     'lng': '22.31111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bela Crkva',
      //     'lat': '44.8975',
      //     'lng': '21.41722'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Torak',
      //     'lat': '45.50928',
      //     'lng': '20.609'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bečmen',
      //     'lat': '44.77983',
      //     'lng': '20.20577'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bečej',
      //     'lat': '45.61632',
      //     'lng': '20.03331'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Batočina',
      //     'lat': '44.15361',
      //     'lng': '21.08167'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bašaid',
      //     'lat': '45.64102',
      //     'lng': '20.41434'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Barice',
      //     'lat': '45.18189',
      //     'lng': '21.08279'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Barič',
      //     'lat': '44.6507',
      //     'lng': '20.25941'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Baranda',
      //     'lat': '45.08459',
      //     'lng': '20.44264'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Barajevo',
      //     'lat': '44.57889',
      //     'lng': '20.41583'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatsko Veliko Selo',
      //     'lat': '45.81961',
      //     'lng': '20.60772'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatsko Karađorđevo',
      //     'lat': '45.58693',
      //     'lng': '20.56421'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatski Karlovac',
      //     'lat': '45.04987',
      //     'lng': '21.018'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatski Dvor',
      //     'lat': '45.51866',
      //     'lng': '20.51146'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatski Despotovac',
      //     'lat': '45.36606',
      //     'lng': '20.66407'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banatska Topola',
      //     'lat': '45.67248',
      //     'lng': '20.4653'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bačko Petrovo Selo',
      //     'lat': '45.70681',
      //     'lng': '20.07928'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bačko Gradište',
      //     'lat': '45.53271',
      //     'lng': '20.03082'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Arilje',
      //     'lat': '43.75306',
      //     'lng': '20.09556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Aranđelovac',
      //     'lat': '44.30694',
      //     'lng': '20.56'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Aradac',
      //     'lat': '45.38346',
      //     'lng': '20.30137'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Alibunar',
      //     'lat': '45.08083',
      //     'lng': '20.96583'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Aleksinac',
      //     'lat': '43.54167',
      //     'lng': '21.70778'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Aleksandrovac',
      //     'lat': '43.45861',
      //     'lng': '21.0525'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ada',
      //     'lat': '45.8025',
      //     'lng': '20.12583'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Raška',
      //     'lat': '43.28722',
      //     'lng': '20.61528'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Niška Banja',
      //     'lat': '43.29507',
      //     'lng': '22.0057'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sokolovica',
      //     'lat': '43.21528',
      //     'lng': '20.31556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rusko Selo',
      //     'lat': '45.76291',
      //     'lng': '20.57117'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Voždovac',
      //     'lat': '44.77833',
      //     'lng': '20.47583'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zvezdara',
      //     'lat': '44.77465',
      //     'lng': '20.53207'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Prislonica',
      //     'lat': '43.95223',
      //     'lng': '20.43521'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Knić',
      //     'lat': '43.92694',
      //     'lng': '20.71889'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Savski Venac',
      //     'lat': '44.77917',
      //     'lng': '20.45389'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Palilula',
      //     'lat': '44.81167',
      //     'lng': '20.51611'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stari Grad',
      //     'lat': '44.81789',
      //     'lng': '20.46186'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zminjak',
      //     'lat': '44.75711',
      //     'lng': '19.4707'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zmajevo',
      //     'lat': '45.45408',
      //     'lng': '19.6905'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vrdnik',
      //     'lat': '45.12174',
      //     'lng': '19.79227'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vrbas',
      //     'lat': '45.57139',
      //     'lng': '19.64083'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Vladimirci',
      //     'lat': '44.61472',
      //     'lng': '19.78528'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Višnjićevo',
      //     'lat': '44.96731',
      //     'lng': '19.28993'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Veternik',
      //     'lat': '45.25446',
      //     'lng': '19.7588'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Varna',
      //     'lat': '44.67914',
      //     'lng': '19.6515'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Valjevo',
      //     'lat': '44.27513',
      //     'lng': '19.89821'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Uzveće',
      //     'lat': '44.87861',
      //     'lng': '19.60356'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Užice',
      //     'lat': '43.85861',
      //     'lng': '19.84878'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Tršić',
      //     'lat': '44.49502',
      //     'lng': '19.2649'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Temerin',
      //     'lat': '45.40861',
      //     'lng': '19.88917'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Tabanović',
      //     'lat': '44.82018',
      //     'lng': '19.64128'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Subotica',
      //     'lat': '46.1',
      //     'lng': '19.66667'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Štitar',
      //     'lat': '44.79415',
      //     'lng': '19.59529'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stepanovićevo',
      //     'lat': '45.41369',
      //     'lng': '19.7'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Stanišić',
      //     'lat': '45.93895',
      //     'lng': '19.16709'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sremski Karlovci',
      //     'lat': '45.2025',
      //     'lng': '19.93444'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sremska Mitrovica',
      //     'lat': '44.97639',
      //     'lng': '19.61222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Srbobran',
      //     'lat': '45.55389',
      //     'lng': '19.80278'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sonta',
      //     'lat': '45.59427',
      //     'lng': '19.09719'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sombor',
      //     'lat': '45.77417',
      //     'lng': '19.11222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sjenica',
      //     'lat': '43.27306',
      //     'lng': '19.99944'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sinošević',
      //     'lat': '44.61503',
      //     'lng': '19.63601'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Šid',
      //     'lat': '45.12833',
      //     'lng': '19.22639'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ševarice',
      //     'lat': '44.86704',
      //     'lng': '19.66006'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Šašinci',
      //     'lat': '44.96514',
      //     'lng': '19.74151'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Salaš Noćajski',
      //     'lat': '44.94722',
      //     'lng': '19.58611'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Salaš Crnobarski',
      //     'lat': '44.82843',
      //     'lng': '19.39437'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Šabac',
      //     'lat': '44.74667',
      //     'lng': '19.69'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rumenka',
      //     'lat': '45.294',
      //     'lng': '19.74306'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ruma',
      //     'lat': '45.00806',
      //     'lng': '19.82222'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Riđica',
      //     'lat': '45.99088',
      //     'lng': '19.10635'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ribari',
      //     'lat': '44.70961',
      //     'lng': '19.42472'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ravno Selo',
      //     'lat': '45.44967',
      //     'lng': '19.62097'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ravnje',
      //     'lat': '44.94326',
      //     'lng': '19.4228'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Radenković',
      //     'lat': '44.92191',
      //     'lng': '19.49543'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Putinci',
      //     'lat': '44.99259',
      //     'lng': '19.97102'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Prnjavor',
      //     'lat': '44.70061',
      //     'lng': '19.38695'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Prijepolje',
      //     'lat': '43.38996',
      //     'lng': '19.6487'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Prigrevica',
      //     'lat': '45.67636',
      //     'lng': '19.08809'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Priboj',
      //     'lat': '43.58306',
      //     'lng': '19.52519'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Platičevo',
      //     'lat': '44.82213',
      //     'lng': '19.79487'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Petrovaradin',
      //     'lat': '45.24667',
      //     'lng': '19.87944'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Petkovica',
      //     'lat': '44.66627',
      //     'lng': '19.43923'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Pećinci',
      //     'lat': '44.90889',
      //     'lng': '19.96639'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Osečina',
      //     'lat': '44.37306',
      //     'lng': '19.60139'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Odžaci',
      //     'lat': '45.50667',
      //     'lng': '19.26111'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Obrovac',
      //     'lat': '45.32106',
      //     'lng': '19.35048'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novo Selo',
      //     'lat': '44.67041',
      //     'lng': '19.34495'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Novi Sad',
      //     'lat': '45.25167',
      //     'lng': '19.83694'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nova Varoš',
      //     'lat': '43.46056',
      //     'lng': '19.81139'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Nikinci',
      //     'lat': '44.85017',
      //     'lng': '19.82321'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Metković',
      //     'lat': '44.85617',
      //     'lng': '19.54654'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mali Zvornik',
      //     'lat': '44.37344',
      //     'lng': '19.10651'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mali Iđoš',
      //     'lat': '45.70833',
      //     'lng': '19.66528'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Majur',
      //     'lat': '44.77105',
      //     'lng': '19.65512'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Maglić',
      //     'lat': '45.36248',
      //     'lng': '19.53211'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Mačvanska Mitrovica',
      //     'lat': '44.96739',
      //     'lng': '19.59314'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ljubovija',
      //     'lat': '44.18944',
      //     'lng': '19.37667'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lipolist',
      //     'lat': '44.69783',
      //     'lng': '19.50101'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lipnički Šor',
      //     'lat': '44.58058',
      //     'lng': '19.26572'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lešnica',
      //     'lat': '44.6525',
      //     'lng': '19.31'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kupusina',
      //     'lat': '45.73759',
      //     'lng': '19.01082'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kulpin',
      //     'lat': '45.4024',
      //     'lng': '19.58814'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kula',
      //     'lat': '45.60889',
      //     'lng': '19.52639'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Krupanj',
      //     'lat': '44.36556',
      //     'lng': '19.36194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Krivaja',
      //     'lat': '44.55021',
      //     'lng': '19.59153'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kozjak',
      //     'lat': '44.58727',
      //     'lng': '19.28412'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kosjerić',
      //     'lat': '43.99611',
      //     'lng': '19.90694'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kolut',
      //     'lat': '45.89292',
      //     'lng': '18.9276'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Koceljeva',
      //     'lat': '44.47361',
      //     'lng': '19.81167'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Klenje',
      //     'lat': '44.80794',
      //     'lng': '19.43508'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Klenak',
      //     'lat': '44.78846',
      //     'lng': '19.71004'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kisač',
      //     'lat': '45.35421',
      //     'lng': '19.72975'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Kamenica',
      //     'lat': '44.343',
      //     'lng': '19.72333'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Joševa',
      //     'lat': '44.58772',
      //     'lng': '19.40967'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jevremovac',
      //     'lat': '44.72172',
      //     'lng': '19.66364'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jelenča',
      //     'lat': '44.727',
      //     'lng': '19.735'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jarebice',
      //     'lat': '44.53995',
      //     'lng': '19.42418'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jarak',
      //     'lat': '44.91843',
      //     'lng': '19.75477'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Jadranska Lešnica',
      //     'lat': '44.5973',
      //     'lng': '19.35209'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Irig',
      //     'lat': '45.10111',
      //     'lng': '19.85833'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Hrtkovci',
      //     'lat': '44.88155',
      //     'lng': '19.76374'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Grabovci',
      //     'lat': '44.76496',
      //     'lng': '19.84489'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gornja Bukovica',
      //     'lat': '44.33987',
      //     'lng': '19.81368'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Glušci',
      //     'lat': '44.89021',
      //     'lng': '19.54913'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gložan',
      //     'lat': '45.27954',
      //     'lng': '19.56838'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Gakovo',
      //     'lat': '45.90078',
      //     'lng': '19.06138'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Dublje',
      //     'lat': '44.80117',
      //     'lng': '19.50902'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Drenovac',
      //     'lat': '44.86649',
      //     'lng': '19.70943'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Draginje',
      //     'lat': '44.53302',
      //     'lng': '19.7625'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Doroslovo',
      //     'lat': '45.60699',
      //     'lng': '19.18868'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Donji Dobrić',
      //     'lat': '44.61183',
      //     'lng': '19.33109'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Dobrić',
      //     'lat': '44.70224',
      //     'lng': '19.57931'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Despotovo',
      //     'lat': '45.45983',
      //     'lng': '19.52653'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Crna Bara',
      //     'lat': '44.87374',
      //     'lng': '19.3948'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čokešina',
      //     'lat': '44.65319',
      //     'lng': '19.39016'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čelarevo',
      //     'lat': '45.26999',
      //     'lng': '19.52484'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Čajetina',
      //     'lat': '43.74977',
      //     'lng': '19.71273'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bukor',
      //     'lat': '44.49523',
      //     'lng': '19.57116'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Buđanovci',
      //     'lat': '44.89388',
      //     'lng': '19.86344'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Brdarica',
      //     'lat': '44.55376',
      //     'lng': '19.7715'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bosut',
      //     'lat': '44.92977',
      //     'lng': '19.36086'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bogosavac',
      //     'lat': '44.71799',
      //     'lng': '19.59533'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bogojevo',
      //     'lat': '45.53106',
      //     'lng': '19.13205'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bogatić',
      //     'lat': '44.8375',
      //     'lng': '19.48056'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Beočin',
      //     'lat': '45.20829',
      //     'lng': '19.72063'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Belotić',
      //     'lat': '44.81782',
      //     'lng': '19.54801'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Banovo Polje',
      //     'lat': '44.9104',
      //     'lng': '19.44916'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bajina Bašta',
      //     'lat': '43.97083',
      //     'lng': '19.5675'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Badovinci',
      //     'lat': '44.78534',
      //     'lng': '19.37146'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bački Petrovac',
      //     'lat': '45.36056',
      //     'lng': '19.59167'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bački Breg',
      //     'lat': '45.92034',
      //     'lng': '18.92944'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bačka Topola',
      //     'lat': '45.81516',
      //     'lng': '19.6318'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bačka Palanka',
      //     'lat': '45.25083',
      //     'lng': '19.39194'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Bač',
      //     'lat': '45.39194',
      //     'lng': '19.23667'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Apatin',
      //     'lat': '45.67111',
      //     'lng': '18.98472'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Pocerski Pričinović',
      //     'lat': '44.72222',
      //     'lng': '19.70722'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Ðurići',
      //     'lat': '43.82533',
      //     'lng': '19.41233'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Zlatibor',
      //     'lat': '43.729',
      //     'lng': '19.70029'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sokolovo Brdo',
      //     'lat': '43.13694',
      //     'lng': '19.80556'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Osječenik',
      //     'lat': '43.14528',
      //     'lng': '19.85889'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Rumska',
      //     'lat': '44.57261',
      //     'lng': '19.58988'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Knjazevac',
      //     'lat': '43.56634',
      //     'lng': '22.25701'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Sumulicë',
      //     'lat': '42.38682',
      //     'lng': '21.734'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Lagja e Poshtme',
      //     'lat': '42.38853',
      //     'lng': '21.72971'
      //   },
      //   {
      //     'country': 'RS',
      //     'name': 'Irig',
      //     'lat': '45.0523',
      //     'lng': '19.84448'
      //   }
      // ];

      // for (let city of cc) {
      //   //console.log(city);
      //   city.country__r = '55a0f42f20a4d760b5fc3128';
      //   console.log(city);
      //   //strapi.services.city.add(ctx.request.body);
      //   strapi.services.city.add(city);
      // }

      return strapi.services.city.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a city record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.city.fetch(ctx.params);
  },

  /**
   * Count city records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.city.count(ctx.query);
  },

  /**
   * Create a/an city record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.city.add(ctx.request.body);
  },

  /**
   * Update a/an city record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.city.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an city record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.city.remove(ctx.params);
  }
};
