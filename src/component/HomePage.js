import React, {Component} from 'react'
import './css/style.css'

class HomePage extends Component{
    render(){
        return(
            <div className="main-content">
                <h2>1. Giới thiệu thuật toán KNN (K-Nearest Neighbor - KNN)</h2>
                <p>K-nearest neighbor là một trong những thuật toán supervised-learning đơn giản nhất (mà hiệu quả trong một vài trường hợp) trong Machine Learning. Khi training, thuật toán này không học một điều gì từ dữ liệu training (đây cũng là lý do thuật toán này được xếp vào loại lazy learning), mọi tính toán được thực hiện khi nó cần dự đoán kết quả của dữ liệu mới. K-nearest neighbor có thể áp dụng được vào cả hai loại của bài toán Supervised learning là Classification và Regression. KNN còn được gọi là một thuật toán Instance-based hay Memory-based learning.</p>
                <img src="https://miro.medium.com/max/6000/1*_r-PcPEK7css8UDINDgkgg.gif" />
                <h2>2. Bài toán ứng dụng thuật toán</h2>
                <p>Có một cô gái T là developer cô gái xinh đẹp giỏi giang, lại là dân kĩ thuật nên rất cá tính và được rất nhiều người theo đuổi. Cô không biết phải chọn ai trong số nhưng anh chàng đang tán tỉnh và theo đuổi mình. Với lợi thế là một developer, cô quyết định code một chương trình để nó có thể giúp cô đưa ra quyết định những anh chàng kia có phù hợp để trở thành người bạn trai của cô không?</p>
                {/* <br></br> */}
                <p>Cô bắt đầu tự nghĩ ra những quy chuẩn để đánh giá những anh chàng đó :Như bao cô gái khác cô đưa ra 3 yếu tố :</p>
                <ol>
                    <li>Đẹp trai</li><br></br>
                    <li>Đẹp trai</li><br></br>
                    <li>Học giỏi và hài hước</li>
                </ol>
                <br></br>
                <p>
                Tuy nhiên nghe 3 khái niệm có vể trừu tượng quá cô đổi chúng thành : 1. ngoại hình 2. kinh tế 3. học thức và hài hước
                </p>
                <p>Chúng được đánh giá trên thang điểm từ 0 – 1 có thể hiểu là trên thang điểm 10 cũng được. Cô bắt đầu nghĩ đến tập dữ liệu tranning của mình đó là: </p>
                <ol>
                    <li>những anh chàng hình mẫu lý tưởng</li><br></br>
                    <li>những anh chàng không thể nào yêu thương được</li><br></br>
                    <li>những anh chàng đã từng là người yêu</li>
                </ol>
                <br/>
                <p>
                Anh H có các chỉ số như sau : ngoại hình 7đ, kinh tế 5đ, học thức 4đ, hài hước 7đ 
                Ta có khoảng cách của anh H với anh chàng số 1 trong tập dữ liệu mẫu: 
                    d(H,1) = sqrt((0.7-0.9)2  + (0.5-0.8)2  + (0.4-0.6)2  + (0.7-0.6)2  ) = sqrt(0.18) 
                    tương tự ta có khoảng cách với các anh chàng trong tập dữ liệu mẫu như sau:
                </p>
            </div>
        );
    }
}

export default HomePage;