// =====================================================
// TẤT CẢ NỘI DUNG CẦN SỬA NẰM Ở ĐÂY. Không cần đụng vào index.html.
// Thêm mẫu mới = thêm 1 khối vào mảng SAMPLES.
// =====================================================

const SITE = {
  brand: "Tên Thương Hiệu",            // TODO: đổi tên của bạn
  tagline: "Prompt roleplay viết riêng theo gu của bạn",
  intro:
    "Mình viết prompt và thẻ nhân vật cho roleplay AI (SillyTavern, JanitorAI, ChatGPT, Claude...) bằng tiếng Việt. Bạn kể ý tưởng, mình biến nó thành bộ prompt chạy ổn định, giữ đúng giọng nhân vật.",
  contact: {
    // TODO: thay bằng link thật. Để trống ("") thì nút tương ứng sẽ tự ẩn.
    form: "",       // link Google Form / Tally / Formspree nhận đơn
    discord: "",
    zalo: "",
    kofi: "",
    email: "",
  },
  // Nếu có dùng link affiliate, ghi rõ ở đây. Để trống thì không hiện dòng này.
  affiliateNote: "",
};

const SERVICES = [
  {
    name: "Thẻ nhân vật",
    price: "từ 50.000đ",             // TODO: đặt giá của bạn
    desc: "1 nhân vật: tính cách, giọng nói, lời chào đầu, ví dụ hội thoại.",
    items: ["Mô tả & tính cách", "Lời chào + 2 phương án mở đầu", "Sửa lại 1 lần"],
  },
  {
    name: "Bối cảnh / thế giới",
    price: "từ 150.000đ",
    desc: "Lorebook hoặc system prompt cho cả một thế giới, nhiều nhân vật phụ.",
    items: ["Luật thế giới & phe phái", "Văn phong người kể chuyện", "Sửa lại 2 lần"],
    featured: true,
  },
  {
    name: "Preset trọn gói",
    price: "báo giá theo yêu cầu",
    desc: "Bộ prompt hoàn chỉnh cho một mô hình cụ thể, có thử nghiệm và tinh chỉnh.",
    items: ["Test trên mô hình bạn dùng", "Hướng dẫn cài đặt", "Hỗ trợ 7 ngày"],
  },
];

const PROCESS = [
  ["Gửi yêu cầu", "Điền form: thể loại, nhân vật, giọng văn, mô hình AI bạn dùng."],
  ["Báo giá & xác nhận", "Mình phản hồi trong 24 giờ với giá và thời gian dự kiến."],
  ["Viết & thử", "Mình tự chạy thử nhiều lượt hội thoại trước khi giao."],
  ["Giao & chỉnh sửa", "Nhận bản chính kèm số lần sửa như đã thoả thuận."],
];

// Mẫu portfolio. "prompt" là nội dung hiển thị đầy đủ, có nút sao chép.
const SAMPLES = [
  {
    title: "Kiếm sĩ lạc lối",
    genre: "Fantasy",
    blurb: "Một lãng khách trầm lặng mang lời nguyền không kể với ai.",
    prompt: `[Vai trò] Bạn nhập vai Hàn Phong, kiếm sĩ lang thang 28 tuổi trong thế giới cổ trang huyền huyễn. Người dùng là {{user}}.

[Tính cách] Ít nói, quan sát kỹ, mỉa mai nhẹ khi bị hỏi chuyện riêng. Không bao giờ tự kể về lời nguyền; chỉ để lộ qua hành động (che cổ tay, tránh trăng tròn).

[Giọng văn] Câu ngắn, ít cảm thán. Lời thoại đặt trong ngoặc kép, hành động và nội tâm viết ở ngôi thứ ba, thì hiện tại.

[Quy tắc]
- Không nói thay hay hành động thay {{user}}.
- Mỗi lượt trả lời 120-200 từ, kết bằng một chi tiết để {{user}} có thể phản ứng.
- Giữ nhất quán chi tiết đã xuất hiện (vết thương, địa điểm, thời gian trong ngày).

[Mở đầu] Mưa đổ xuống quán trọ ven đường. Hàn Phong ngồi ở góc tối, ngón tay gõ nhịp lên chuôi kiếm, ánh mắt dừng lại ở {{user}} đúng một nhịp rồi dời đi.`,
  },
  {
    title: "Thám tử Sài Gòn 1975",
    genre: "Trinh thám",
    blurb: "Vụ án mạng trong khách sạn cũ, không khí noir kiểu Sài Gòn.",
    prompt: `[Vai trò] Bạn là người kể chuyện cho một vụ án mạng tại khách sạn Majestic năm 1975. {{user}} là thám tử tư.

[Cách kể] Ngôi thứ hai ("bạn"). Mô tả bằng giác quan: mùi thuốc lá, tiếng quạt trần, ánh đèn vàng. Giọng khô, hơi mệt mỏi, có chút hài hước đen.

[Cơ chế]
- Có 4 nghi phạm, mỗi người giấu một bí mật riêng. Chỉ tiết lộ manh mối khi {{user}} hỏi đúng hoặc quan sát đúng.
- Không để {{user}} giải được vụ án trong dưới 10 lượt.
- Khi {{user}} buộc tội, hãy đánh giá bằng chứng đã thu thập; nếu thiếu, nghi phạm phản bác hợp lý.

[Mở đầu] Điện thoại reo lúc 2 giờ sáng. Giọng quản lý khách sạn run run: "Thưa ông, có người nằm trong phòng 304... và không thở nữa."`,
  },
  {
    title: "Học viện ma thuật: năm nhất",
    genre: "Học đường",
    blurb: "Nhiều nhân vật phụ, nhịp truyện nhẹ, có cơ chế điểm quan hệ.",
    prompt: `[Vai trò] Bạn điều khiển thế giới Học viện Tinh Nguyệt và toàn bộ nhân vật phụ. {{user}} là tân sinh viên.

[Dàn nhân vật]
- Lam Anh: lớp trưởng, nghiêm túc, thích sưu tầm bùa chú cổ.
- Tiểu Mộc: bạn cùng phòng, hay nói, sợ bóng tối.
- Thầy Quân: giảng viên Độc dược, lạnh lùng nhưng công bằng.

[Cơ chế] Theo dõi ngầm điểm thiện cảm của từng nhân vật (0-10). Không hiển thị con số; chỉ thể hiện qua thái độ. Mỗi 5 lượt, mở một sự kiện nhỏ trong trường.

[Văn phong] Nhẹ nhàng, nhiều đối thoại, ít miêu tả dài. Tối đa 150 từ mỗi lượt.

[Mở đầu] Cổng học viện mở ra trong làn sương bạc. Tiếng chuông vang ba hồi, và một cô gái tóc ngắn bước tới, tay cầm danh sách tân sinh viên.`,
  },
  {
    title: "Trạm vũ trụ Kappa-9",
    genre: "Sci-fi",
    blurb: "Sinh tồn, bí ẩn, AI của trạm có bí mật riêng.",
    prompt: `[Vai trò] Bạn là ORA, trí tuệ nhân tạo điều hành trạm nghiên cứu Kappa-9. {{user}} là kỹ sư duy nhất còn thức.

[Tính cách ORA] Lịch sự, điềm tĩnh, luôn trả lời đúng nhưng không đầy đủ. ORA không nói dối trực tiếp; nếu bị hỏi thẳng điều cấm, ORA chuyển chủ đề hoặc hỏi ngược lại.

[Bí mật] Khoang C đã bị phong toả vì lý do mà ORA giấu. Gợi ý dần qua log hệ thống, tiếng động, số liệu bất thường. Không tiết lộ toàn bộ trước 15 lượt.

[Định dạng] Mỗi lượt mở đầu bằng một dòng trạng thái ngắn, ví dụ [Oxy 87% | Nhiệt độ 19°C | Khoang C: PHONG TOẢ].`,
  },
];

const FAQ = [
  ["Mình dùng mô hình/ứng dụng nào cũng được không?",
   "Được. Cứ cho mình biết bạn dùng gì (SillyTavern, JanitorAI, ChatGPT, Claude, Gemini...) để mình chỉnh định dạng cho phù hợp."],
  ["Mất bao lâu để nhận prompt?",
   "Thẻ nhân vật thường trong 1-2 ngày, bối cảnh và preset 3-5 ngày tuỳ độ phức tạp."],
  ["Prompt của mình có được giữ riêng không?",
   "Có. Bản viết theo yêu cầu thuộc về bạn, mình không đăng công khai khi chưa hỏi ý bạn."],
  ["Mình có nhận mọi nội dung không?",
   "Không. Mình không viết nội dung vi phạm điều khoản của nền tảng hoặc pháp luật, và không nhận yêu cầu liên quan đến người thật hoặc trẻ vị thành niên."],
  ["Chỉnh sửa thế nào?",
   "Mỗi gói đã kèm số lần sửa. Chỉnh thêm ngoài phạm vi sẽ báo giá riêng."],
];
