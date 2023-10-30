import React from 'react'
import cover from '../Images/cover.jpg'
import people from '../Images/people.jpg'
import book from '../Images/book.jpg'
import rating from '../Images/rating.jpg'
import c1 from '../Images/c1.jpg'
import c2 from '../Images/c2.jpg'
import c3 from '../Images/c3.jpg'
import c4 from '../Images/c4.jpg'
import c5 from '../Images/c5.jpg'
import c6 from '../Images/c6.jpg'
import c7 from '../Images/c7.jpg'
import c8 from '../Images/c8.jpg'
import c9 from '../Images/c9.jpg'
import c10 from '../Images/c10.jpg'
import c11 from '../Images/c11.jpg'
import c12 from '../Images/c12.jpg'
import stars from '../Images/stars.jpg'
import course from '../Images/course.jpg'
import time from '../Images/time.jpg'

const main = () => {
    return (
        <div className='main'>
            <div className='main-left'>
                <div className='top-bread'>
                    <h4>Home /</h4>
                    <h4 className='top-bread-loc'>Instructor</h4>
                </div>
                <div className='main-left-1'>
                    <img src={cover} width={280} alt="cover"></img>
                    <h2 className='cover-name'>Henry S. Miller</h2>
                    <p className='cover-desc'>Pro Photographer, Videographer, Award Winning Youtuber</p>
                    <img className='rating' src={rating} alt='rating'></img>
                </div>
                <div className='main-left-2'>
                    <div>
                        <img src={people}></img>
                    </div>
                    <div className='people'>
                        <div className='people-1'>
                            <h4>Total Students</h4>
                            <h3>115,144</h3>
                        </div>
                    </div>
                    <div className='book'>
                        <img src={book}></img>
                    </div>
                    <div className='courses'>
                        <div className='courses-1'>
                            <h4>Courses</h4>
                            <h3>16</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-right-1'>
                <div>
                    <h2>About me</h2>
                    <p>I'm a full time pro photographer based out of San Francisco, California. I'm also a full time youtuber, filmmaker, world traveler, and educator.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <h2>My Courses</h2>
                <div className='main-right-2'>
                    <div>
                        <img src={c1} alt="c1"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c12} alt="c1"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c2} alt="c2"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c3} alt="c3"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c4} alt="c4"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c5} alt="c5"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c6} alt="c6"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c7} alt="c7"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c8} alt="c8"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c9} alt="c9"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c10} alt="c1"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={c11} alt="c1"></img>
                        <div className='desc'>
                            <div className='box-cate'>
                                Development
                            </div>
                            <div><img src={stars} alt="stars"></img></div>
                        </div>
                        <h4 className='title'>Beginner's Photography: Basic Camera Use and Theory</h4>
                        <div className='detail'>
                            <div>
                                <img src={course} alt="lessons"></img>
                            </div>
                            <div>
                                <img src={time} alt="time"></img>
                            </div>
                        </div>
                        <div className='detail-2'>
                            <div>
                                <p className='author'>by John Doe</p>
                            </div>
                            <div className='prices'>
                                <p className='price'>$5.45</p>
                                <p className='dis_price'>$5.45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main