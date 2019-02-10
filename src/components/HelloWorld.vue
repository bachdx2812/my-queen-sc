<template>
  <section class='block-content t-block-teal l-block-spacing'>
    <div class='l-contained'>
        <header class="heading-group">
            <h2>Our Story</h2>
            <p class="subtitle">Lets write our story together</p>
        </header>
        <ul class="timeline-list">
            <li v-for="event in events">
                <div class="content">
                    <h3 class="title">{{ event.title }}</h3>
                    <h4>{{ event.time }}</h4>
                    <p>{{ event.content }}</p>
                    <p v-if="event.htmlContent" v-html="event.htmlContent"></p>
                </div>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      events: [
            {
              title: "First Message",
              time: "2018/11",
              content: "First Message. Hi Jane, anh không phải là Tarzan, nhưng anh có thể làm quen em chứ ?"
            },
            {
              title: 'First Date',
              time: '2019/01/20',
              content: 'Cafe Hiên Huỳnh Thúc Kháng, hẹn 20h, 19h15 em tới, ngồi chờ anh ở 1 góc nhỏ tầng 2, xin lỗi đã để em chờ, socola của em đây. Em thật đẹp'
            },
            {
              title: 'Vài lần đón đưa',
              time: '2019/1/21',
              content: 'Lần đầu lừa cô Phưn đi đón về, rùi sáng sớm dựng dậy bắt đi ăn sáng, uống trà nóng, buổi sáng thật yên bình bên em. Vài lần như vậy, anh đã quen có em đằng sau mình...'
            },
            {
              title: 'Second Date',
              time: '2019/1/22',
              content: 'Xôi Tùng 75 Mai Hắc Đế, Royal Tea 239 Trần Đại Nghĩa, Cafe 70s 69 Trần Đại Nghĩa, tắc đường vcl ở Phạm Ngọc Thạch và kinh đô Chùa Bộc'
            },
            {
              title: 'Oẳn tù tì',
              time: '2019/1/30',
              content: 'Lần đầu đi xem film cùng nhau, em chọn Glass (bộ 3 quái thai), anh mấy lần định ngủ cho rồi nhưng không muốn làm em buồn nên cố mà gượng dậy xem =)), quyệt định làm liều nắm tay em. Nhưng tđn lại thành anh ra lá, em ra búa :)'
            },
            {
              title: 'Karaoke 1st time',
              time: '2019/2/1',
              content: '2 đứa quyết định đi hát để tra tấn màng nhĩ của nhao, nhưng rồi thế nào mà 2 đứa đều hát ra gì của nó, vui thật vui em nhỉ, được nắm tay em hò hét, được thoáng ôm em và vuốt tóc em. Thật bình yên'
            },
            {
              title: 'Xa em',
              time: '2019/2/2',
              content: 'Tết âm lịch, em về quê với bố mẹ, anh cũng ngồi lì ở nhà, mình gọi điện nói chuyện cho đến khi em chìm vào giấc ngủ,lần đầu tiên anh thấy em khóc. Thật tệ khi đó anh không thể bên cạnh em, từ giờ đừng khóc 1 mình nữa em nhé. Những ngày này không có em bên cạnh, anh lạc lõng và nhớ em vô cùng.'
            },
            {
              title: 'Giao thừa bên nhau thời 4.0',
              time: '2019/2/5',
              content: 'Giao thừa đầu tiên bên nhau. Em thủ thỉ với anh `em thích anh`. Anh mong nhiều năm về sau nữa năm nào chúng ta cũng sẽ thủ thỉ với nhau những điều ngọt ngào như vậy. Tặng em 2 bài thơ con cóc.',
              htmlContent: '<p><h3>Gửi Phương bé</h3><br/>Tầng 2 Hiên cà phê chờ<br/>Phương ngồi nơi đó một mình lơ thơ<br/>Tóc dài đen xoã mặt ngơ<br/>Bơ vơ một góc Phương chờ anh qua<br/></p><p>Lần đầu ngại ngùng qua loa<br>Anh đành lôi chô cô la ra mời<br>Mắt Phương lập tức sáng ngời<br>Anh đã có lời em xơi ngay nè<br></p><p>Thế rùi ngày ngày bên nhau<br>Sáng trưa chiều tối sau xe anh này<br>Anh qua là khỏi trình bày<br>2 ca trà đá mặt dày mời em<br></p><p>Em thì được cái dễ chiều<br>Bún riêu xôi thịt em đều không chê<br>Anh nhìn em đến đê mê<br>Em thì ngại ngại ăn đê nhìn gì<br></p><hr/><p>Nắng bắt đầu từ gió,<br>Gió bắt đầu từ đâu?<br>Anh cũng không biết nữa.<br>Khi nào ta yêu nhau.<br></p><p>Anh cũng không quan tâm.<br>Chỉ cần em bên cạnh.<br>Cùng anh vượt sóng gió<br>Yên ổn suốt cuộc đời.<br></p>'
            },
            {
              title: 'Our first thousand kisses',
              time: '2019/2/10',
              content: 'Chính xác thì nụ hôn đầu không được như ý cho lắm. Tuy nhiên các lần sau làm lại thì cũng thật tuyệt vời em nhỉ. Anh thì kệ mẹ đời hôn em bất cứ khi nào anh muốn, bất cứ khi nào có thể.Phở cuốn Ngũ Xã, Hồ Gươm lộng gió, ăn vặt Tạ Hiện. ',
                htmlContent: '<p>Hồ Tây chiều xuân lộng gió<br>Em có ngại khi anh hôn em?<br>Lem nhem nước mắm từ phở cuốn<br>Luống cuống cúi đầu mắt láo liên<br>Đồ điên , đang nơi công cộng<br>Có muốn động ra chỗ không bóng ai<br>Tôi lai rai cho ông biết mặt<br>'
            },
      ]
    }
  }
}
</script>

<style scoped>
</style>
