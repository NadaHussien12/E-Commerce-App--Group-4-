import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';
import 'home.dart';
import 'wishlist2.dart';
class homeScreen3 extends StatefulWidget {
  const homeScreen3({Key? key}) : super(key: key);


  @override
  State<homeScreen3> createState() => _homeScreen3State();
}

class _homeScreen3State extends State<homeScreen3> {
  @override
  Widget build(BuildContext context) {
    return  const ZoomDrawer(
      menuScreen: drawerScreen(),
      mainScreen: homeScreen22(),
      borderRadius: 20,
      showShadow: true,
      angle: 0,
      menuBackgroundColor: Color(0xff432267) ,
    );

  }
}

class homeScreen22 extends StatefulWidget {
  const homeScreen22({Key? key}) : super(key: key);

  @override
  State<homeScreen22> createState() => _homeScreen22State();
}

class _homeScreen22State extends State<homeScreen22> {
  bool click = true;
  bool click2 = true;
  bool click3 = true;
  bool click4 = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
          children: [
            Stack(
                children:
                [ Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 15),
                  child: ClipRRect(
                    borderRadius: const BorderRadius.only(topRight: Radius.circular(25),topLeft: Radius.circular(25)),
                    child: Container(
                      color: const Color.fromRGBO(67, 34, 103, 1.0),
                      height:80,
                    ),
                  ),
                ),
                  Padding(
                    padding: const EdgeInsets.only(top: 30),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Padding(
                            padding: const EdgeInsets.only(left: 40),
                            child: DrawerWidget()
                        ),
                        const Text("Wishlist",style: TextStyle(
                            fontSize: 25,
                            fontFamily:"JosefinSans",
                            color: Colors.white
                        ),
                        ),
                        Padding(
                            padding: const EdgeInsets.only(right: 40),
                            child: InkWell(
                                onTap:(){
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => const homeScreen2()
                                      )
                                  );
                                } ,
                                child: Image.asset("assets/image/home.png"))
                        )
                      ],
                    ),
                  ),
                ]
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 30.0,left: 30, right: 20,top: 20),
              child: Row(
                children:[
                  const Text("May your wishes come true",style: TextStyle(fontSize: 18.0,fontWeight: FontWeight.bold,fontFamily:"JosefinSans", )),
                  const SizedBox(width: 30),
                  Image.asset("assets/image/path-8.png"),
                  const SizedBox(width: 5),
                  InkWell(
                      onTap: (){
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => const homeScreen4()
                            )
                        );
                      },
                      child: Image.asset("assets/image/path-7.png")
                  ),
                ],
              ),
            ),
            Column(
              children: [
                Row(
                  children: [
                    Stack(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: ClipRRect(
                            borderRadius:const BorderRadius.only(topLeft: const Radius.circular(20),topRight:Radius.circular(20),bottomLeft: Radius.circular(20),bottomRight: const Radius.circular(20), ),
                            child: Container(
                              child: const Image(
                                image:NetworkImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgz66RQtRUXjsuBleTyrNXhkmVkePzyi9ltHZoHs9RcXpjlSmW"),
                                height: 230,
                                width: 150,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Row(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(left: 22),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Container(
                                  color: Colors.white,
                                  child: const Padding(
                                    padding: EdgeInsets.only(right: 5,left: 5,top: 2,bottom: 2),
                                    child: Text("15% OFF",style: TextStyle(color:Color.fromRGBO(233, 144, 0, 1.0),fontSize: 12),),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                                padding: EdgeInsets.only(left: 50,top: 25),
                                child: CircleAvatar(
                                  radius: 17,
                                  backgroundColor: click? Color.fromRGBO(67, 34, 103, 1.0):  Colors.white,
                                  child: IconButton (
                                    onPressed: (){
                                      setState(() {
                                        click = !click;
                                      });
                                    }, icon:
                                  Icon(
                                    click? Icons.favorite: Icons.favorite_border,size: 20,),

                                    color: click? Color.fromRGBO(233, 144, 0, 1.0) : Colors.black
                                  ),
                                )
                            ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 215,left: 15,right: 10),
                          child: Row(
                            children: [
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topLeft: const Radius.circular(10),bottomLeft: const Radius.circular(10)),
                                child: Container(
                                    height: 40,
                                    width: 105,
                                    color: Colors.white,
                                    child: Padding(
                                      padding: const EdgeInsets.all(3.0),
                                      child: Center(
                                        child: Column(
                                          children: const [
                                            Text("Type of Brand",style: TextStyle(fontFamily:"JosefinSans",),),
                                            Text("BRAND")
                                          ],
                                        ),
                                      ),
                                    )
                                ),
                              ),
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topRight: const Radius.circular(10),bottomRight: const Radius.circular(10)),
                                child: Container(
                                  height: 40,
                                  width: 50,
                                  color:  Color.fromRGBO(67, 34, 103, 1.0) ,
                                  child: Padding(
                                    padding: const EdgeInsets.only(top: 4),
                                    child: Column(
                                      children:[
                                        Image.asset("assets/image/shopping-bag.png",height: 20),
                                        Text("15.99",style: TextStyle(color: Colors.white,fontSize: 13),),
                                      ],
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                    Stack(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: ClipRRect(
                            borderRadius:const BorderRadius.only(topLeft: const Radius.circular(20),topRight:const Radius.circular(20),bottomLeft: Radius.circular(20),bottomRight: const Radius.circular(20), ),
                            child: Container(
                              child: const Image(
                                image:NetworkImage("https://blog.jasminesilk.com/wp-content/uploads/2019/12/AdobeStock_173659966-e1577184739117.jpeg"),
                                height: 230,
                                width: 150,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Row(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(left: 22),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Container(
                                  color: Colors.white,
                                  child: const Padding(
                                    padding: EdgeInsets.only(right: 5,left: 5,top: 2,bottom: 2),
                                    child: Text("15% OFF",style: TextStyle(color:Color.fromRGBO(233, 144, 0, 1.0),fontSize: 12),),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                                padding: EdgeInsets.only(left: 50,top: 25),
                                child: CircleAvatar(
                                  radius: 17,
                                  backgroundColor: click4? Color.fromRGBO(67, 34, 103, 1.0):  Colors.white,
                                  child: IconButton (
                                      onPressed: (){
                                        setState(() {
                                          click4 = !click4;
                                        });
                                      }, icon:
                                  Icon(
                                    click4? Icons.favorite: Icons.favorite_border,size: 20,),

                                      color: click4? Color.fromRGBO(233, 144, 0, 1.0) : Colors.black
                                  ),
                                )
                            ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 215,left: 15,right: 10),
                          child: Row(
                            children: [
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topLeft: const Radius.circular(10),bottomLeft: Radius.circular(10)),
                                child: Container(
                                    height: 40,
                                    width: 105,
                                    color: Colors.white,
                                    child: Padding(
                                      padding: const EdgeInsets.all(4.0),
                                      child: Center(
                                        child: Column(
                                          children: const [
                                            Text("Type of Brand",style: TextStyle(fontFamily:"JosefinSans",),),
                                            Text("BRAND",style: TextStyle(fontFamily:"JosefinSans",),)
                                          ],
                                        ),
                                      ),
                                    )
                                ),
                              ),
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topRight: const Radius.circular(10),bottomRight: Radius.circular(10)),
                                child: Container(
                                  height: 40,
                                  width: 50,
                                  color:  Color.fromRGBO(67, 34, 103, 1.0),
                                  child: Padding(
                                    padding: const EdgeInsets.only(top: 4),
                                    child: Column(
                                      children:[
                                        Image.asset("assets/image/shopping-bag.png",height: 20),
                                        Text("20.99",style: TextStyle(color: Colors.white,fontSize: 13),),
                                      ],
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ],
                ),
                Row(
                  children: [
                    Stack(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: ClipRRect(
                            borderRadius:const BorderRadius.only(topLeft: const Radius.circular(20),topRight:const Radius.circular(20),bottomLeft: Radius.circular(20),bottomRight: const Radius.circular(20), ),
                            child: Container(
                              child: const Image(
                                image:NetworkImage("https://cdn.shopify.com/s/files/1/2343/4045/products/womens-transparent-lace-fashion-designer-blouse-long-sleeve-tops-womens-fashion-designer-long-sleeve-tops-womens-fashion-designer-plus-size-clothes.jpg?v=1649671518"),
                                height: 230,
                                width: 150,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Row(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(left: 22),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Container(
                                  color: Colors.white,
                                  child: const Padding(
                                    padding: EdgeInsets.only(right: 5,left: 5,top: 2,bottom: 2),
                                    child: Text("15% OFF",style: TextStyle(color:Color.fromRGBO(233, 144, 0, 1.0),fontSize: 12),),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                                padding: EdgeInsets.only(left: 50,top: 25),
                                child: CircleAvatar(
                                  radius: 17,
                                  backgroundColor: click2? Color.fromRGBO(67, 34, 103, 1.0):  Colors.white,
                                  child: IconButton (
                                      onPressed: (){
                                        setState(() {
                                          click2 = !click2;
                                        });
                                      }, icon:
                                  Icon(
                                    click2? Icons.favorite: Icons.favorite_border,size: 20,),

                                      color: click2? Color.fromRGBO(233, 144, 0, 1.0) : Colors.black
                                  ),
                                )
                            ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 215,left: 15,right: 10),
                          child: Row(
                            children: [
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topLeft: const Radius.circular(10),bottomLeft: const Radius.circular(10)),
                                child: Container(
                                    height: 40,
                                    width: 105,
                                    color: Colors.white,
                                    child: Padding(
                                      padding: const EdgeInsets.all(4.0),
                                      child: Center(
                                        child: Column(
                                          children: const [
                                            Text("Type of Brand",style: TextStyle(fontFamily:"JosefinSans",),),
                                            Text("BRAND",style: TextStyle(fontFamily:"JosefinSans",),)
                                          ],
                                        ),
                                      ),
                                    )
                                ),
                              ),
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topRight: Radius.circular(10),bottomRight: Radius.circular(10)),
                                child: Container(
                                  height: 40,
                                  width: 50,
                                  color:Color.fromRGBO(67, 34, 103, 1.0),
                                  child: Padding(
                                    padding: const EdgeInsets.only(top: 4),
                                    child: Column(
                                      children:[
                                        Image.asset("assets/image/shopping-bag.png",height: 20),
                                        Text("10.99",style: TextStyle(color: Colors.white,fontSize: 13),),
                                      ],
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                    Stack(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: ClipRRect(
                            borderRadius:const BorderRadius.only(topLeft: const Radius.circular(15),topRight:const Radius.circular(15),bottomLeft: const Radius.circular(15),bottomRight: const Radius.circular(15), ),
                            child: Container(
                              child: const Image(
                                image:NetworkImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqo4mr1TqDVt504Rb6C3UB2iL0hUa3K6g3cK9tD-n53C8Te_paxGqPIInrfGniCpb29c&usqp=CAU"),
                                height: 230,
                                width: 150,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Row(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(left: 22),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Container(
                                  color: Colors.white,
                                  child: const Padding(
                                    padding: EdgeInsets.only(right: 5,left: 5,top: 2,bottom: 2),
                                    child: Text("15% OFF",style: TextStyle(color:Color.fromRGBO(233, 144, 0, 1.0),fontSize: 12),),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                                padding: EdgeInsets.only(left: 50,top: 25),
                                child: CircleAvatar(
                                  radius: 17,
                                  backgroundColor: click3? Color.fromRGBO(67, 34, 103, 1.0):  Colors.white,
                                  child: IconButton (
                                      onPressed: (){
                                        setState(() {
                                          click3 = !click3;
                                        });
                                      }, icon:
                                  Icon(
                                    click3? Icons.favorite: Icons.favorite_border,size: 20,),

                                      color: click3? Color.fromRGBO(233, 144, 0, 1.0) : Colors.black
                                  ),
                                )
                            ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 215,left: 15,right: 10),
                          child: Row(
                            children: [
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topLeft: const Radius.circular(10),bottomLeft: const Radius.circular(10)),
                                child: Container(
                                    height: 40,
                                    width: 105,
                                    color: Colors.white,
                                    child: Padding(
                                      padding: const EdgeInsets.all(3.0),
                                      child: Center(
                                        child: Column(
                                          children: const [
                                            Text("Type of Brand",style: TextStyle(fontFamily:"JosefinSans",),),
                                            Text("BRAND",style: TextStyle(fontFamily:"JosefinSans",),)
                                          ],
                                        ),
                                      ),
                                    )
                                ),
                              ),
                              ClipRRect(
                                borderRadius: const BorderRadius.only(topRight: const Radius.circular(10),bottomRight: const Radius.circular(10)),
                                child: Container(
                                  height: 40,
                                  width: 50,
                                  color: Color.fromRGBO(67, 34, 103, 1.0),
                                  child: Padding(
                                    padding: const EdgeInsets.only(top: 4),
                                    child: Column(
                                      children:[
                                        Image.asset("assets/image/shopping-bag.png",height: 20),
                                        Text("15.99",style: TextStyle(color: Colors.white,fontSize: 13),),
                                      ],
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ],
                )
              ],
            ),
          ],
        )

    );
  }
}
class DrawerWidget extends StatelessWidget {
  const DrawerWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return InkWell(
        onTap:(){
          ZoomDrawer.of(context)!.toggle();
        },
        child: Image.asset("assets/image/menu.png"));
  }
}

