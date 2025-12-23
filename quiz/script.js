// Dữ liệu câu hỏi được tạo tự động
const myQuestions = [
    {
        "question": "2. Phát biểu nào sau đây đúng về Hệ điều hành?",
        "answers": {
            "a": "Quản lý các tiến trình",
            "b": "Thực hiện phép tính số học",
            "c": "Là ngôn ngữ lập trình",
            "d": "Là thiết bị phần cứng"
        },
        "correctAnswer": "a"
    },
    {
        "question": "3. Bus trong máy tính do thành phần nào điều khiển sử dụng?",
        "answers": {
            "a": "RAM",
            "b": "Ổ cứng",
            "c": "Vi xử lý",
            "d": "Card màn hình"
        },
        "correctAnswer": "c"
    },
    {
        "question": "4. Nhiệm vụ của Trình biên dịch (Compiler) là gì?",
        "answers": {
            "a": "Dịch từng dòng lệnh toàn bộ chương trình từ ngôn ngữ cấp cao sang ngôn ngữ máy",
            "b": "Chạy chương trình trực tiếp",
            "c": "Quản lý bộ nhớ",
            "d": "Kiểm tra lỗi chính tả"
        },
        "correctAnswer": "a"
    },
    {
        "question": "5. CPU được chia ra thành 2 thành phần chính đó là:",
        "answers": {
            "a": "RAM và ROM",
            "b": "Input và Output",
            "c": "Control Unit và Arithmetic/Logic Unit",
            "d": "Cache và Register"
        },
        "correctAnswer": "c"
    },
    {
        "question": "6. Cách thiết kế top-down design nghĩa là gì?",
        "answers": {
            "a": "Thiết kế từ tính năng lớn phân ra tính năng nhỏ",
            "b": "Thiết kế từ dưới lên",
            "c": "Thiết kế ngẫu nhiên",
            "d": "Thiết kế theo mẫu"
        },
        "correctAnswer": "a"
    },
    {
        "question": "7. Ngôn ngữ lập trình cấp thấp là:",
        "answers": {
            "a": "Ngôn ngữ gần với ngôn ngữ tự nhiên",
            "b": "Biên dịch ra mã máy rồi thực thi",
            "c": "Chỉ chạy trên web",
            "d": "Không cần biên dịch"
        },
        "correctAnswer": "b"
    },
    {
        "question": "8. Trong hệ điều hành, 1 tiến trình (process) là:",
        "answers": {
            "a": "Một file dữ liệu",
            "b": "Một chương trình thực thi",
            "c": "Một thiết bị phần cứng",
            "d": "Một người dùng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "9. Có bao nhiêu thuật toán lập lịch cho CPU (CPU scheduling)?",
        "answers": {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4"
        },
        "correctAnswer": "c"
    },
    {
        "question": "10. Một nút (host - node) trong mạng nghĩa là gì?",
        "answers": {
            "a": "Chỉ máy tính",
            "b": "Chỉ router",
            "c": "Bất cứ thiết bị nào trong mạng",
            "d": "Chỉ server"
        },
        "correctAnswer": "c"
    },
    {
        "question": "11. Địa chỉ vật lý (Physical address) trong bộ nhớ là?",
        "answers": {
            "a": "Địa chỉ ảo",
            "b": "Địa chỉ thực của bộ nhớ",
            "c": "Địa chỉ IP",
            "d": "Địa chỉ email"
        },
        "correctAnswer": "b"
    },
    {
        "question": "12. Bus trong máy tính sử dụng làm gì?",
        "answers": {
            "a": "Lưu trữ dữ liệu",
            "b": "Xử lý tính toán",
            "c": "Thiết bị truyền dữ liệu giữa các thành phần máy tính",
            "d": "Hiển thị hình ảnh"
        },
        "correctAnswer": "c"
    },
    {
        "question": "13. Việc giải quyết vấn đề (problem solving) trong CNTT gồm mấy bước?",
        "answers": {
            "a": "3",
            "b": "4",
            "c": "5",
            "d": "6"
        },
        "correctAnswer": "b"
    },
    {
        "question": "14. Một hệ thống máy tính bao gồm bao nhiêu layer?",
        "answers": {
            "a": "4",
            "b": "5",
            "c": "6",
            "d": "7"
        },
        "correctAnswer": "c"
    },
    {
        "question": "15. Quản lý tiến trình trong hệ điều hành là chuyển từ trạng thái:",
        "answers": {
            "a": "Ready sang Running",
            "b": "Running sang Terminated",
            "c": "New sang Ready",
            "d": "Waiting sang Ready"
        },
        "correctAnswer": "a"
    },
    {
        "question": "16. Chatbot không phải là 1 ứng dụng của trí tuệ nhân tạo?",
        "answers": {
            "a": "Đúng",
            "b": "Sai"
        },
        "correctAnswer": "b"
    },
    {
        "question": "17. Ngôn ngữ tự nhiên là:",
        "answers": {
            "a": "Ngôn ngữ lập trình",
            "b": "Ngôn ngữ máy",
            "c": "Ngôn ngữ của con người",
            "d": "Ngôn ngữ ký hiệu"
        },
        "correctAnswer": "c"
    },
    {
        "question": "18. Mã Unicode sử dụng bao nhiêu bit để biểu diễn cho 1 ký tự?",
        "answers": {
            "a": "8 bit",
            "b": "16 bit",
            "c": "32 bit",
            "d": "64 bit"
        },
        "correctAnswer": "b"
    },
    {
        "question": "19. Các thiết bị phần cứng thuộc thế hệ thứ nhất ra đời vào khoảng thời gian nào?",
        "answers": {
            "a": "1945 – 1950",
            "b": "1951 – 1959",
            "c": "1960 – 1969",
            "d": "1970 – 1979"
        },
        "correctAnswer": "b"
    },
    {
        "question": "20. Assembly là ngôn ngữ có thể thực thi mà không cần tới trình biên dịch?",
        "answers": {
            "a": "Đúng",
            "b": "Sai"
        },
        "correctAnswer": "b"
    },
    {
        "question": "21. Phát biểu nào đúng về tính toán song song (parallel computing)?",
        "answers": {
            "a": "Chỉ dùng một CPU",
            "b": "Máy tính dựa vào các bộ xử lý trung tâm và/hoặc bộ nhớ được kết nối với nhau để tăng tốc độ xử lý",
            "c": "Không thể xử lý nhiều tác vụ cùng lúc",
            "d": "Chỉ dành cho game"
        },
        "correctAnswer": "b"
    },
    {
        "question": "22. Trong Phép thử Turing:",
        "answers": {
            "a": "Máy móc phải thắng con người trong cờ vua",
            "b": "Trí thông minh của máy móc được so sánh với trí thông minh của con người",
            "c": "Máy móc phải tự sửa lỗi",
            "d": "Máy móc phải có cảm xúc"
        },
        "correctAnswer": "b"
    },
    {
        "question": "23. Phát biểu nào sau đây đúng về Hệ thống dựa trên tri thức?",
        "answers": {
            "a": "Phần mềm không cần dữ liệu",
            "b": "Phần mềm sử dụng một bộ thông tin cụ thể, từ đó nó trích xuất và xử lý các phần cụ thể",
            "c": "Chỉ dùng cho game",
            "d": "Không cần lập trình"
        },
        "correctAnswer": "b"
    },
    {
        "question": "24. Alan Turing - người phát minh ra phép thử Turing - là người nước nào?",
        "answers": {
            "a": "Mỹ",
            "b": "Đức",
            "c": "Anh",
            "d": "Pháp"
        },
        "correctAnswer": "c"
    },
    {
        "question": "25. Đâu không phải là một lĩnh vực trong xử lý ngôn ngữ tự nhiên?",
        "answers": {
            "a": "Dịch máy",
            "b": "Tóm tắt văn bản",
            "c": "Robotics",
            "d": "Phân tích cảm xúc"
        },
        "correctAnswer": "c"
    },
    {
        "question": "26. Đâu là tên miền cho các tổ chức giáo dục ở Việt Nam?",
        "answers": {
            "a": ".com.vn",
            "b": ".edu.vn",
            "c": ".gov.vn",
            "d": ".net.vn"
        },
        "correctAnswer": "b"
    },
    {
        "question": "27. Mô hình nào không phải là mô hình kết nối máy tính trong mạng cục bộ?",
        "answers": {
            "a": "Hình sao (Star)",
            "b": "Hình vòng (Ring)",
            "c": "Hình tam giác (Triangle)",
            "d": "Hình bus (Bus)"
        },
        "correctAnswer": "c"
    },
    {
        "question": "28. Data transfer rate (bandwidth) trong mạng là:",
        "answers": {
            "a": "Số lượng thiết bị trong mạng",
            "b": "Tốc độ di chuyển dữ liệu từ nơi này sang nơi khác trong mạng",
            "c": "Khoảng cách vật lý giữa các máy tính",
            "d": "Loại cáp mạng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "29. Có tổng cộng bao nhiêu tầng trong mô hình OSI?",
        "answers": {
            "a": "5",
            "b": "6",
            "c": "7",
            "d": "8"
        },
        "correctAnswer": "c"
    },
    {
        "question": "30. Hyper Text Transfer Protocol (http) là giao thức sử dụng để làm gì?",
        "answers": {
            "a": "Gửi email",
            "b": "Truyền file",
            "c": "Truyền siêu văn bản cho phép trao đổi tài liệu Web",
            "d": "Kết nối máy in"
        },
        "correctAnswer": "c"
    },
    {
        "question": "31. Hệ điều hành sử dụng hệ thống chia sẻ thời gian nhằm mục đích gì?",
        "answers": {
            "a": "Chỉ chạy một tiến trình tại một thời điểm",
            "b": "Cho phép nhiều tiến trình chạy đồng thời cùng 1 lúc",
            "c": "Tắt máy tính từ xa",
            "d": "Quản lý phần cứng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "32. Đâu không phải là vai trò của một hệ điều hành?",
        "answers": {
            "a": "Quản lý bộ nhớ",
            "b": "Quản lý file",
            "c": "Quản lý các phép toán số học và luận lý",
            "d": "Quản lý tiến trình"
        },
        "correctAnswer": "c"
    },
    {
        "question": "33. Trong quản lý tiến trình, khi một tiến trình đang ở trạng thái Running thì có chuyển về Ready được không?",
        "answers": {
            "a": "Không",
            "b": "Được"
        },
        "correctAnswer": "b"
    },
    {
        "question": "34. Có 5 tiến trình: P1:120, P2:50, P3:200, P4:300, P5:180. Áp dụng FCFS, thời gian hoàn tất đến P3 là?",
        "answers": {
            "a": "120",
            "b": "170",
            "c": "370",
            "d": "550"
        },
        "correctAnswer": "c"
    },
    {
        "question": "35. Khi biểu diễn giải thuật bằng ngôn ngữ tự nhiên có hạn chế gì?",
        "answers": {
            "a": "Quá chính xác",
            "b": "Không thể hiện ý tưởng",
            "c": "Ngôn ngữ tự nhiên thường không được cấu trúc và cụ thể, có thể gây hiểu nhầm",
            "d": "Quá nhanh"
        },
        "correctAnswer": "c"
    },
    {
        "question": "36. Phát biểu nào sau đây đúng về Arithmetic/Logic Unit?",
        "answers": {
            "a": "Lưu trữ dữ liệu",
            "b": "Thực hiện các phép tính số học/luận lý",
            "c": "Điều khiển các thiết bị vào ra",
            "d": "Kết nối mạng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "37. Quy trình nạp - thực thi gồm bao nhiêu bước?",
        "answers": {
            "a": "2",
            "b": "3",
            "c": "4",
            "d": "5"
        },
        "correctAnswer": "c"
    },
    {
        "question": "38. Phần mở rộng .png thuộc kiểu file gì?",
        "answers": {
            "a": "File văn bản",
            "b": "File hình ảnh",
            "c": "File âm thanh",
            "d": "File video"
        },
        "correctAnswer": "b"
    },
    {
        "question": "39. Dùng 10 bit thì có thể biểu diễn bao nhiêu giá trị?",
        "answers": {
            "a": "512",
            "b": "1024",
            "c": "2048",
            "d": "4096"
        },
        "correctAnswer": "b"
    },
    {
        "question": "40. Trong hệ màu 24-bit color depth thì có bao nhiêu bit cho từng màu RGB?",
        "answers": {
            "a": "4",
            "b": "8",
            "c": "12",
            "d": "16"
        },
        "correctAnswer": "b"
    },
    {
        "question": "41. Đâu là định dạng file video?",
        "answers": {
            "a": "MP3",
            "b": "JPG",
            "c": "MP4",
            "d": "PDF"
        },
        "correctAnswer": "c"
    },
    {
        "question": "42. Mã giả (pseudo-code) dùng để làm gì?",
        "answers": {
            "a": "Chạy trực tiếp trên máy",
            "b": "Thể hiện tương đối nội dung của giải thuật",
            "c": "Nén dữ liệu",
            "d": "Mã hóa thông tin"
        },
        "correctAnswer": "b"
    },
    {
        "question": "43. Giải thuật (Algorithm) là:",
        "answers": {
            "a": "Phần cứng máy tính",
            "b": "Những câu lệnh trừu tượng chạy trong thời gian giới hạn",
            "c": "Một loại virus",
            "d": "Tên một ngôn ngữ lập trình"
        },
        "correctAnswer": "b"
    },
    {
        "question": "44. Độ phân giải (Resolution) của 1 tấm hình nghĩa là gì?",
        "answers": {
            "a": "Kích thước file",
            "b": "Số pixel trong 1 tấm ảnh",
            "c": "Độ sáng của ảnh",
            "d": "Tỷ lệ khung hình"
        },
        "correctAnswer": "b"
    },
    {
        "question": "45. Nhược điểm của Vacuum tube (ống chân không) là gì?",
        "answers": {
            "a": "Quá nhỏ",
            "b": "Sinh nhiệt khá lớn và không chính xác",
            "c": "Không thể thay thế",
            "d": "Quá rẻ"
        },
        "correctAnswer": "b"
    },
    {
        "question": "46. URL là viết tắt của:",
        "answers": {
            "a": "Universal Resource Link",
            "b": "Uniform Resource Locator",
            "c": "United Retrieval Language",
            "d": "Unified Resource Library"
        },
        "correctAnswer": "b"
    },
    {
        "question": "47. Phát biểu nào sau đây đúng về Hệ thống tìm kiếm?",
        "answers": {
            "a": "Website giúp tìm kiếm những website khác",
            "b": "Là một hệ điều hành",
            "c": "Là một ngôn ngữ lập trình",
            "d": "Là một phần cứng máy tính"
        },
        "correctAnswer": "a"
    },
    {
        "question": "48. Thuật toán First Come First Served cần có thời gian như nhau cho các tiến trình?",
        "answers": {
            "a": "Đúng",
            "b": "Sai"
        },
        "correctAnswer": "b"
    },
    {
        "question": "49. Trong hệ nhị phân (binary) 1 + 1 = ?",
        "answers": {
            "a": "1",
            "b": "2",
            "c": "0 nhớ 1",
            "d": "10"
        },
        "correctAnswer": "c"
    },
    {
        "question": "50. Cách thiết kế bottom-up design nghĩa là gì?",
        "answers": {
            "a": "Thiết kế từ trên xuống",
            "b": "Thiết kế từ các tính năng nhỏ gom lại thành tính năng lớn",
            "c": "Thiết kế ngẫu nhiên",
            "d": "Thiết kế theo mẫu"
        },
        "correctAnswer": "b"
    },
    {
        "question": "51. Một hệ thống máy tính có bao nhiêu lớp (Layer)?",
        "answers": {
            "a": "4",
            "b": "5",
            "c": "6",
            "d": "7"
        },
        "correctAnswer": "c"
    },
    {
        "question": "52. Giá trị 77 trong bảng mã ASCII biểu diễn cho ký tự gì?",
        "answers": {
            "a": "A",
            "b": "M",
            "c": "Z",
            "d": "7"
        },
        "correctAnswer": "b"
    },
    {
        "question": "53. Giá trị \"10010110\" trong một ô nhớ có thể là:",
        "answers": {
            "a": "Một ký tự",
            "b": "Một số nguyên",
            "c": "Một lệnh",
            "d": "Tất cả đều đúng"
        },
        "correctAnswer": "d"
    },
    {
        "question": "54. Mã Unicode sử dụng bao nhiêu bit cho 1 ký tự?",
        "answers": {
            "a": "8",
            "b": "16",
            "c": "32",
            "d": "64"
        },
        "correctAnswer": "b"
    },
    {
        "question": "55. Phần mở rộng .png thuộc kiểu file gì?",
        "answers": {
            "a": "File văn bản",
            "b": "File hình ảnh",
            "c": "File âm thanh",
            "d": "File video"
        },
        "correctAnswer": "b"
    },
    {
        "question": "56. Bảng ASCII mở rộng dùng bao nhiêu bit cho 1 ký tự?",
        "answers": {
            "a": "7",
            "b": "8",
            "c": "16",
            "d": "32"
        },
        "correctAnswer": "b"
    },
    {
        "question": "57. Định dạng nào không thuộc file audio?",
        "answers": {
            "a": "WAV",
            "b": "MP3",
            "c": "TIFF",
            "d": "AU"
        },
        "correctAnswer": "c"
    },
    {
        "question": "58. MPEG là viết tắt của từ gì?",
        "answers": {
            "a": "Moving Picture Experts Group",
            "b": "Music Picture Encoding Group",
            "c": "Multi Platform Encoding Graphics",
            "d": "Media Processing Encoding Group"
        },
        "correctAnswer": "a"
    },
    {
        "question": "59. Bảng mã ASCII dùng bao nhiêu bit cho 1 ký tự?",
        "answers": {
            "a": "7",
            "b": "8",
            "c": "16",
            "d": "32"
        },
        "correctAnswer": "a"
    },
    {
        "question": "60. RGB (255, 255, 255) biểu diễn màu gì?",
        "answers": {
            "a": "Đen",
            "b": "Trắng",
            "c": "Đỏ",
            "d": "Xanh"
        },
        "correctAnswer": "b"
    },
    {
        "question": "61. Dùng 6 bit thì có thể biểu diễn bao nhiêu giá trị?",
        "answers": {
            "a": "32",
            "b": "64",
            "c": "128",
            "d": "256"
        },
        "correctAnswer": "b"
    },
    {
        "question": "62. RGB (146, 81, 0) biểu diễn màu gì?",
        "answers": {
            "a": "Xanh lá",
            "b": "Nâu",
            "c": "Tím",
            "d": "Vàng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "63. RGB (0, 0, 0) thể hiện màu gì?",
        "answers": {
            "a": "Đen",
            "b": "Trắng",
            "c": "Xám",
            "d": "Đỏ"
        },
        "correctAnswer": "a"
    },
    {
        "question": "64. Độ phân giải (Resolution) của 1 tấm hình có ý nghĩa là gì?",
        "answers": {
            "a": "Kích thước file",
            "b": "Số pixel trong một tấm hình",
            "c": "Tỷ lệ khung hình",
            "d": "Độ sáng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "65. Nhiệm vụ của ALU trong CPU là gì?",
        "answers": {
            "a": "Lưu trữ dữ liệu",
            "b": "Thực hiện các phép tính số học/luận lý",
            "c": "Điều khiển thiết bị ngoại vi",
            "d": "Kết nối mạng"
        },
        "correctAnswer": "b"
    },
    {
        "question": "66. Các thiết bị trong máy tính được kết nối với nhau như thế nào?",
        "answers": {
            "a": "Qua Internet",
            "b": "Qua Bluetooth",
            "c": "Tất cả kết nối thông qua bus",
            "d": "Qua Wi-Fi"
        },
        "correctAnswer": "c"
    },
    {
        "question": "67. RAM là bộ nhớ:",
        "answers": {
            "a": "Chỉ đọc",
            "b": "Chỉ ghi ngẫu nhiên",
            "c": "Chỉ lưu trữ vĩnh viễn",
            "d": "Không thể truy cập"
        },
        "correctAnswer": "b"
    },
    {
        "question": "68. Mã giả (pseudo-code) dùng để:",
        "answers": {
            "a": "Chạy trực tiếp",
            "b": "Thể hiện tương đối giải thuật",
            "c": "Nén file",
            "d": "Mã hóa dữ liệu"
        },
        "correctAnswer": "b"
    },
    {
        "question": "69. Lợi ích của chiến lược \"Chia để trị\" là:",
        "answers": {
            "a": "Làm cho công việc phức tạp hơn",
            "b": "Chia công việc lớn thành nhiều công việc nhỏ để dễ giải quyết",
            "c": "Tăng thời gian xử lý",
            "d": "Giảm hiệu suất"
        },
        "correctAnswer": "b"
    },
    {
        "question": "70. Lập lịch CPU là tiến trình chuyển từ trạng thái ... sang ...",
        "answers": {
            "a": "Ready/ Running",
            "b": "Running/ Terminated",
            "c": "New/ Ready",
            "d": "Waiting/ Ready"
        },
        "correctAnswer": "a"
    },
    {
        "question": "71. Thuật toán nào không phải là thuật toán lập lịch CPU?",
        "answers": {
            "a": "First Come First Served",
            "b": "Shortest Job First",
            "c": "Round Robin",
            "d": "First Come Last Server"
        },
        "correctAnswer": "d"
    },
    {
        "question": "72. Mạng diện rộng (WAN) kết nối các máy tính:",
        "answers": {
            "a": "Ở khoảng cách tương đối lớn",
            "b": "Chỉ trong một phòng",
            "c": "Chỉ qua Bluetooth",
            "d": "Chỉ qua cáp quang"
        },
        "correctAnswer": "a"
    },
    {
        "question": "73. Trong chuyển mạch gói (Packet Switching):",
        "answers": {
            "a": "Các gói tin được gửi theo một đường kết nối xác định trước",
            "b": "Chỉ gửi một gói duy nhất",
            "c": "Không cần địa chỉ",
            "d": "Chỉ dùng cho thoại"
        },
        "correctAnswer": "a"
    },
    {
        "question": "74. Tên miền cho tổ chức giáo dục ở Việt Nam là?",
        "answers": {
            "a": ".com.vn",
            "b": ".edu.vn",
            "c": ".gov.vn",
            "d": ".org.vn"
        },
        "correctAnswer": "b"
    },
    {
        "question": "75. Về Internet, phát biểu nào sau đây là không đúng?",
        "answers": {
            "a": "Là mạng toàn cầu",
            "b": "Do một chính phủ quản lý và điều hành",
            "c": "Sử dụng giao thức TCP/IP",
            "d": "Kết nối nhiều mạng với nhau"
        },
        "correctAnswer": "b"
    },
    {
        "question": "76. Tên miền chính phủ ở Việt Nam có phần đuôi là?",
        "answers": {
            "a": ".com.vn",
            "b": ".edu.vn",
            "c": ".gov.vn",
            "d": ".net.vn"
        },
        "correctAnswer": "c"
    },
    {
        "question": "77. Mạng máy tính có thể kết nối:",
        "answers": {
            "a": "Chỉ máy tính",
            "b": "Chỉ máy in",
            "c": "Chỉ điện thoại",
            "d": "Tất cả các thiết bị trên"
        },
        "correctAnswer": "d"
    },
    {
        "question": "78. Mô hình nào không phải là mô hình kết nối trong mạng cục bộ?",
        "answers": {
            "a": "Hình sao",
            "b": "Hình vòng",
            "c": "Hình tim",
            "d": "Hình bus"
        },
        "correctAnswer": "c"
    },
    {
        "question": "79. Ngôn ngữ lập trình nào sau đây không phải là ngôn ngữ cấp cao?",
        "answers": {
            "a": "Python",
            "b": "Java",
            "c": "C++",
            "d": "Assembly"
        },
        "correctAnswer": "d"
    },
    {
        "question": "80. Trí tuệ nhân tạo nhằm mục đích:",
        "answers": {
            "a": "Chỉ chơi game",
            "b": "Nghiên cứu và vận dụng trí tuệ thông minh của con người lên máy móc",
            "c": "Chỉ nhận diện hình ảnh",
            "d": "Chỉ xử lý ngôn ngữ"
        },
        "correctAnswer": "b"
    },
    {
        "question": "81. Phần mềm ứng dụng dùng làm gì?",
        "answers": {
            "a": "Quản lý phần cứng",
            "b": "Giải quyết các vấn đề cần thiết trong thế giới thực",
            "c": "Dịch ngôn ngữ lập trình",
            "d": "Chạy hệ điều hành"
        },
        "correctAnswer": "b"
    },
    {
        "question": "82. Assembly là ngôn ngữ có thể thực thi mà không cần trình biên dịch?",
        "answers": {
            "a": "Đúng",
            "b": "Sai"
        },
        "correctAnswer": "b"
    },
    {
        "question": "83. Mạng ngữ nghĩa (Semantic Network) là:",
        "answers": {
            "a": "Biểu diễn một tri thức như một đối tượng",
            "b": "Biểu diễn quan hệ giữa các đối tượng như một cung",
            "c": "Mỗi cung có hướng và đặt tên",
            "d": "Tất cả đều đúng"
        },
        "correctAnswer": "d"
    },
    {
        "question": "84. Chương trình viết bằng ngôn ngữ assembly:",
        "answers": {
            "a": "Chạy trực tiếp trên mọi máy",
            "b": "Phải dịch sang mã máy để thực thi",
            "c": "Không cần biên dịch",
            "d": "Chỉ chạy trên hệ điều hành Windows"
        },
        "correctAnswer": "b"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Xóa các class style cũ (nếu làm lại)
        const labels = answerContainer.querySelectorAll('label');
        labels.forEach(label => {
            label.classList.remove('answer-correct', 'answer-wrong');
        });

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            // Tô màu đáp án đúng của người dùng
            if(answerContainer.querySelector(selector)) {
                 answerContainer.querySelector(selector).parentElement.classList.add('answer-correct');
            }
        } else {
            // Tô màu đáp án sai của người dùng
            if(answerContainer.querySelector(selector)) {
                answerContainer.querySelector(selector).parentElement.classList.add('answer-wrong');
            }
            // Hiển thị đáp án đúng
            // Check if element exists before accessing parentElement
            const correctInput = answerContainer.querySelector(`input[value="${currentQuestion.correctAnswer}"]`);
            if (correctInput) {
                correctInput.parentElement.classList.add('answer-correct');
            }
        }
    });

    resultsContainer.innerHTML = `Kết quả: ${numCorrect} trên ${myQuestions.length} câu đúng`;
    
    // Ẩn nút nộp bài, hiện nút làm lại
    submitButton.style.display = 'none';
    retryButton.style.display = 'block';
}

function resetQuiz() {
    resultsContainer.innerHTML = '';
    submitButton.style.display = 'block';
    retryButton.style.display = 'none';
    buildQuiz();
}

// Hiển thị quiz ngay khi tải trang
buildQuiz();

// Xử lý sự kiện click
submitButton.addEventListener('click', showResults);
retryButton.addEventListener('click', resetQuiz);
