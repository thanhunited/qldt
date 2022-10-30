let currentSchedule = [];
let weekChossen = "";

// func xử lí onchange tuần
function handleSchedule() {
  const weekSelected = document.getElementById("scheduleWeeks");
  var i = weekSelected.selectedIndex;
  weekSelect = weekSelected.options[i].text.slice(5, 7);
  weekChossen = weekSelect; // lấy ra tuần đc chọn rồi xử lí tg và render lại
  app.handletime();
  app.render();
}

const app = {
  schedule: [
    {
      name: "Lịch sử Đảng cộng sản Việt Nam",
      day: "friday",
      time: "3",
      dayNumber: 6,
      group: "18",
      class: "401-A2",
      weeks: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },

    {
      name: "Tiếng Anh (Course 3 Plus)",
      day: "saturday",
      dayNumber: 7,
      time: "3",
      group: "46",
      class: "G05-A2",
      weeks: [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    },

    {
      name: "Cơ sở điều khiển tự động",
      day: "tuesday",
      dayNumber: 3,
      time: "7",
      group: "03",
      class: "505-A2",
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },

    {
      name: "Cơ sở điều khiển tự động",
      day: "tuesday",
      dayNumber: 3,
      time: "11",
      group: "03",
      class: "505-A2",
      weeks: [1, 2, 3, 4, 5, 6, 7],
    },

    {
      name: "Lý thuyết thông tin",
      day: "tuesday",
      dayNumber: 3,
      time: "9",
      group: "01",
      class: "505-A2",
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },

    {
      name: "Lý thuyết thông tin",
      day: "tuesday",
      dayNumber: 3,
      time: "11",
      group: "01",
      class: "505-A2",
      weeks: [9, 10, 11, 12, 13, 14, 15],
    },

    {
      name: "Lý thuyết trường điện từ và siêu cao tần",
      day: "thursday",
      dayNumber: 5,
      time: "9",
      group: "02",
      class: "505-A2",
      weeks: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },

    {
      name: "Lý thuyết trường điện từ và siêu cao tần",
      day: "thursday",
      dayNumber: 5,
      time: "11",
      group: "02",
      class: "505-A2",
      weeks: [9, 10, 11, 12, 13, 14],
    },

    {
      description: "Thực hành",
      name: "Lý thuyết trường điện từ và siêu cao tần",
      day: "thursday",
      dayNumber: 5,
      time: "1",
      group: "02",
      class: "507-1-A3",
      weeks: [8],
    },

    {
      name: "Kiến trúc máy tính",
      day: "saturday",
      dayNumber: 7,
      time: "1",
      group: "01",
      class: "203-A2",
      weeks: [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    },

    {
      name: "Kiến trúc máy tính",
      day: "saturday",
      dayNumber: 7,
      time: "5",
      group: "01",
      class: "203-A2",
      weeks: [1, 2, 4, 6, 7, 8, 9],
    },

    {
      name: "Mạng máy tính",
      day: "friday",
      dayNumber: 6,
      time: "1",
      group: "11",
      class: "305-A3",
      weeks: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },

    {
      name: "Mạng máy tính",
      day: "friday",
      dayNumber: 6,
      time: "5",
      group: "11",
      class: "305-A3",
      weeks: [1, 2, 4, 5, 6, 7],
    },

    {
      description: "Thực hành",
      name: "Mạng máy tính",
      day: "tuesday",
      dayNumber: 3,
      time: "1",
      group: "11",
      class: "305-A3",
      weeks: [8, 13],
    },
  ],

  times: [
    {
      week: 1,
      description: "Tuần 01[Từ 15/08/2022 -- Đến 21/08/2022",
      dateStart: "2022-08-15",
      dateEnd: "2022-08-22",
    },

    {
      week: 2,
      description: "Tuần 02[Từ 22/08/2022 -- Đến 28/08/2022",
      dateStart: "2022-08-22",
      dateEnd: "2022-08-29",
    },

    {
      week: 3,
      description: "Tuần 03[Từ 29/08/2022 -- Đến 04/09/2022",
      dateStart: "2022-08-29",
      dateEnd: "2022-09-05",
    },

    {
      week: 4,
      description: "Tuần 04[Từ 04/09/2022 -- Đến 11/09/2022",
      dateStart: "2022-09-05",
      dateEnd: "2022-09-12",
    },

    {
      week: 5,
      description: "Tuần 05[Từ 12/09/2022 -- Đến 18/09/2022",
      dateStart: "2022-09-12",
      dateEnd: "2022-09-19",
    },

    {
      week: 6,
      description: "Tuần 06[Từ 19/09/2022 -- Đến 25/09/2022",
      dateStart: "2022-08-19",
      dateEnd: "2022-08-26",
    },

    {
      week: 7,
      description: "Tuần 07[Từ 26/09/2022 -- Đến 02/10/2022",
      dateStart: "2022-09-26",
      dateEnd: "2022-10-03",
    },

    {
      week: 8,
      description: "Tuần 08[Từ 03/10/2022 -- Đến 09/10/2022",
      dateStart: "2022-10-03",
      dateEnd: "2022-10-10",
    },

    {
      week: 9,
      description: "Tuần 09[Từ 10/10/2022 -- Đến 16/10/2022",
      dateStart: "2022-10-10",
      dateEnd: "2022-10-17",
    },

    {
      week: 10,
      description: "Tuần 10[Từ 17/10/2022 -- Đến 23/10/2022",
      dateStart: "2022-10-17",
      dateEnd: "2022-10-24",
    },

    {
      week: 11,
      description: "Tuần 11[Từ 24/10/2022 -- Đến 30/10/2022",
      dateStart: "2022-10-24",
      dateEnd: "2022-10-31",
    },

    {
      week: 12,
      description: "Tuần 12[Từ 31/10/2022 -- Đến 06/11/2022",
      dateStart: "2022-10-31",
      dateEnd: "2022-11-07",
    },

    {
      week: 13,
      description: "Tuần 13[Từ 07/11/2022 -- Đến 13/11/2022",
      dateStart: "2022-11-07",
      dateEnd: "2022-11-14",
    },

    {
      week: 14,
      description: "Tuần 14[Từ 14/11/2022 -- Đến 20/11/2022",
      dateStart: "2022-11-14",
      dateEnd: "2022-11-21",
    },

    {
      week: 15,
      description: "Tuần 15[Từ 21/11/2022 -- Đến 27/11/2022",
      dateStart: "2022-11-21",
      dateEnd: "2022-11-28",
    },

    {
      week: 16,
      description: "Tuần 16[Từ 28/11/2022 -- Đến 04/12/2022",
      dateStart: "2022-11-28",
      dateEnd: "2022-12-05",
    },

    {
      week: 17,
      description: "Tuần 17[Từ 05/12/2022 -- Đến 11/12/2022",
      dateStart: "2022-12-05",
      dateEnd: "2022-12-11",
    },
  ],

  handletime: function () {
    var currentWeek;
    const currentdate = new Date();
    this.times.forEach(function (time, index) {
      const dateStart = new Date(time.dateStart);
      const dateEnd = new Date(time.dateEnd);
      if (currentdate > dateStart && currentdate < dateEnd) {
        currentWeek = time.week;
      }
    });

    // Nếu mà tuần khác đc chọn thì cho tuần hiện tại = tuần đó
    if (weekChossen != "") {
      currentWeek = parseInt(weekChossen);
    }

    // Để mặc định cái option selected lúc đầu là tuần đang học
    else if (weekChossen == "") {
      const weekSelected = document.getElementById("scheduleWeeks");
      weekSelect = weekSelected.options[currentWeek - 1].setAttribute(
        "selected",
        true
      );
    }

    // Nếu môn nào có lịch trong tuần đó thì cho môn đó vào mảng ms
    this.schedule.forEach(function (subject, index) {
      if (subject.weeks.includes(currentWeek))
        currentSchedule = [...currentSchedule, subject];
    });
  },

  render: function () {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const lessonAll = [
      "lesson1",
      "lesson2",
      "lesson3",
      "lesson4",
      "lesson5",
      "lesson6",
      "lesson7",
      "lesson8",
      "lesson9",
      "lesson10",
      "lesson11",
      "lesson12",
    ];

    var variableLesson = 1; // tạo biến lặp theo từng kíp
    // Tạo vòng for lặp qua từng kíp
    for (const b of lessonAll) {
      const lessonx = $(`.${b}`);
      let textHTML = "";
      // Tạo vòng for lặp qua từng ngày trong tuần
      for (var i = 2; i <= 9; i++) {
        var dem = 0;
        currentSchedule.forEach(function (subject, index) {
          if (subject.dayNumber == i && subject.time == variableLesson) {
            // Nếu môn nào có ngày và kíp học trùng thì render

            textHTML =
              textHTML +
              `
                <div class="period--active ${
                  subject.description == "Thực hành" ? "active--practice" : ""
                }">  
                  <div class="period--title">
                    <div class="period--name">
                      <span>${subject.name}</span>
                    </div>
                    <div class="period--class">
                      <p>Phòng:</p>
                      <div class="class">${subject.class}</div>
                    </div>
                  </div>
                </div>
              `;
            dem = 1; // kíp nào có môn học thì cho biến đếm = 1
          }
          lessonx.innerHTML = textHTML;
        });
        if (dem == 0) {
          // Ko có thì render ra cái ô rỗng
          textHTML =
            textHTML +
            `
                <div class="period "></div>
            `;
        }
      }
      variableLesson += 1; // Sang kíp tiếp theo
    }
    currentSchedule = []; // reset lại mảng chứ các môn có trong tuần
  },

  start: function () {
    this.handletime();
    this.render();
  },
};

app.start();
