# Portfolio Project Brief (v1)

## 1. Mục tiêu dự án (Project Goals)
- Xây dựng một website Portfolio cá nhân chuyên nghiệp để giới thiệu bản thân, kỹ năng, kinh nghiệm làm việc, dự án, chứng chỉ, và thành tựu nổi bật.
- Tối ưu hóa trải nghiệm người dùng (UX) với giao diện hiện đại, dễ sử dụng, hỗ trợ đa ngôn ngữ (tiếng Việt & tiếng Anh).
- Dễ dàng mở rộng, cập nhật nội dung và tái sử dụng cho các mục đích cá nhân hoặc nghề nghiệp.

## 2. Đối tượng sử dụng (Target Users)
- Nhà tuyển dụng, đối tác, đồng nghiệp, hoặc bất kỳ ai muốn tìm hiểu về năng lực và kinh nghiệm của bạn.
- Chính bản thân bạn để quản lý, cập nhật thông tin nghề nghiệp.

## 3. Các thành phần chính (Core Features)
- **Giới thiệu cá nhân**: Thông tin cá nhân, liên hệ, vị trí, mạng xã hội.
- **Học vấn**: Danh sách các bằng cấp, trường học, thời gian học, trạng thái (đã hoàn thành/đang học), điểm số, các điểm nổi bật.
- **Kinh nghiệm làm việc**: Công ty, vị trí, phòng ban, thời gian, mô tả công việc, thành tựu, trách nhiệm, thách thức kỹ thuật, công nghệ sử dụng.
- **Kỹ năng**: Phân loại kỹ năng (lập trình, công cụ, phân tích, kỹ năng mềm), mức độ thành thạo, số năm kinh nghiệm.
- **Dự án**: Danh sách dự án, mô tả, công nghệ, điểm nổi bật, liên kết GitHub, đánh dấu dự án nổi bật.
- **Chứng chỉ & Giải thưởng**: Danh sách chứng chỉ, giải thưởng, đơn vị cấp, ngày cấp, loại (chứng chỉ, giải thưởng, cuộc thi), icon minh họa.
- **Tóm tắt bản thân**: Đoạn mô tả ngắn gọn về bản thân, định hướng nghề nghiệp.
- **Đa ngôn ngữ**: Hỗ trợ chuyển đổi giữa tiếng Việt và tiếng Anh.
- **Responsive Design**: Hiển thị tốt trên cả desktop và mobile.

## 4. Công nghệ sử dụng (Tech Stack)
- **Frontend**: React (hoặc Next.js), TypeScript, CSS/SCSS hoặc styled-components.
- **State Management**: Context API cho ngôn ngữ và UI.
- **Data**: Lưu trữ dữ liệu dưới dạng file JSON hoặc TypeScript object.
- **Khác**: Có thể tích hợp thêm các thư viện UI (Material UI, Ant Design, TailwindCSS).

## 5. Kiến trúc & Mẫu thiết kế (Architecture & Patterns)
- Phân chia component rõ ràng theo từng section (Personal, Education, Experience, Skills, Projects, Certifications).
- Sử dụng Context cho quản lý ngôn ngữ và trạng thái UI (mở rộng/thu gọn section, loading).
- Tách biệt dữ liệu và giao diện, dễ dàng cập nhật hoặc mở rộng.

## 6. Yêu cầu mở rộng (Future-proofing)
- Dễ dàng thêm mới section hoặc trường dữ liệu.
- Có thể tích hợp backend hoặc CMS nếu cần cập nhật động trong tương lai.
- Hỗ trợ SEO cơ bản (meta tags, schema).

## 7. UX/UI
- Giao diện tối giản, hiện đại, nhấn mạnh vào nội dung.
- Chuyển đổi ngôn ngữ mượt mà, không reload trang.
- Hiển thị trạng thái loading khi cần thiết.
- Tối ưu accessibility (màu sắc, font, tab navigation). 