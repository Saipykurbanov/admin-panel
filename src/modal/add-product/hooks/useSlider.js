import { useEffect, useRef, useState } from "react"
import image1 from './../images/i.webp';
import image2 from './../images/wallets.jpg'
import Store from "../../../Store";

export default function useSlider () {
    const mainSlider = useRef(null)
    const thumbSlider = useRef(null)
    const thumbSliderTrack = useRef(null)
    const addImgBtn = useRef(null)
    const [isDrag, setIsDrag] = useState(false)
    const [thumbSliderScroll, setThumbSliderScroll] = useState(0)
    const [slideNum, setSlideNum] = useState(0)
    const [slideList, setSlideList] = useState([])

    const deleteSlide = (e, index) => {
        e.stopPropagation()
        let list = structuredClone(slideList)
        const sliderWidth = thumbSlider.current.offsetWidth
        const trackWidth = thumbSliderTrack.current.offsetWidth

        // const thumblist = thumbSliderTrack.current.querySelectorAll('.thumb__slide')
        // const mainlist = mainSlider.current.querySelectorAll('.slider__slide')
        // console.log(mainlist)
        // mainlist.forEach((el) => {
        //     if(el.classList.contains('active')) {
        //         el.classList.remove('active')
        //     }
        // })
        // mainlist[index].style.opacity = '0'
        // thumblist[index].classList.add('delete')

        setTimeout(() => {
            list.splice(index, 1)
            console.log(list)
            setSlideList(list)

            if(index === slideList.length - 1) {
                setSlideNum(index - 1)
                setThumbSliderScroll(trackWidth > sliderWidth ? trackWidth - sliderWidth : 0)
                return
            } else if (trackWidth > sliderWidth){
                let distance = slideDistance(index)
    
                if(distance > (sliderWidth / 2)) {
                    let scrollLimit = trackWidth - sliderWidth
                    let scroll = distance - (sliderWidth / 2)
    
                    setThumbSliderScroll(prev => prev + scroll > scrollLimit ? scrollLimit : prev + scroll)
                } else if(distance < (sliderWidth / 2)) {
                    let scroll = (sliderWidth / 2) - distance
    
                    setThumbSliderScroll(prev => prev - scroll <= 0 ? 0 : prev - scroll)
                }
    
            }
            setSlideNum(index)
        }, 400)

    }

    const addNewImage = (e) => {
        
        if(!e.target.files[0]) {
            return
        }

        let list = structuredClone(slideList)

        for(let i = 0; i < e.target.files.length; i++) {
            list.push(URL.createObjectURL(e.target.files[i]))
        }

        
        const newWidth = addImgBtn.current.offsetWidth + (list.length * (addImgBtn.current.offsetWidth + 15))
        
        console.log(newWidth, thumbSlider.current.offsetWidth)
        
        setThumbSliderScroll(newWidth > thumbSlider.current.offsetWidth ?
            newWidth - thumbSlider.current.offsetWidth : 0)
        
        setSlideList(list)

        setSlideNum(list.length - 1)

        Store.setListener('add_image', e?.target?.files)
        
        e.target.value = null
    }

    const nextSlide = () => {
        
        if(slideNum >= slideList.length - 1) {
            setSlideNum(0)
            setThumbSliderScroll(0)
        } else {
            setSlideNum(prev => {
                const num = prev + 1
                const sliderWidth = thumbSlider.current.offsetWidth
                const trackWidth = thumbSliderTrack.current.offsetWidth

                if(trackWidth > sliderWidth) {
                    let distance = slideDistance(num)
    
                    if(distance > (sliderWidth / 2)) {
                        let scrollLimit = trackWidth - sliderWidth
                        let scroll = distance - (sliderWidth / 2)
    
                        setThumbSliderScroll(prev => prev + scroll > scrollLimit ? scrollLimit : prev + scroll)
                    }
                }

                return num
            })
        }
    }

    const prevSlide = () => {

        if(slideNum <= 0) {
            setSlideNum(slideList.length - 1)
            setThumbSliderScroll(thumbSliderTrack.current.offsetWidth > thumbSlider.current.offsetWidth ?
                thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth : 0)
        } else {
            setSlideNum(prev => {
                const num = prev - 1
                const sliderWidth = thumbSlider.current.offsetWidth
                const trackWidth = thumbSliderTrack.current.offsetWidth

                if(trackWidth > sliderWidth) {
                    let distance = slideDistance(num)
    
                    if(distance < (sliderWidth / 2)) {
                        let scroll = (sliderWidth / 2) - distance
    
                        setThumbSliderScroll(prev => prev - scroll <= 0 ? 0 : prev - scroll)
                    }
                }

                return num
            })
        }
    }

    const changeSlideNum = (num) => {
        setSlideNum(num)
    }

    const slideDistance = (num) => {
        let allSlides = Array.from(document.getElementsByClassName('thumb__slide'));
        return (allSlides[num].offsetLeft + (allSlides[num].offsetWidth / 2)) - thumbSliderScroll
    }

    useEffect(() => {

        if(window.innerWidth > 991 && slideList?.length) {
            thumbSlider?.current?.addEventListener('mousedown', dragStart, {passive: false})
            window.addEventListener('mousemove', draging, {passive: false})
            window.addEventListener('mouseup', stopDrag, {passive: false})    
        } else if (window.innerWidth < 991) {
            thumbSlider.current.addEventListener('touchstart ', dragStart, {passive: false})
            window.addEventListener('touchmove', draging, {passive: false})
            window.addEventListener('touchend ', stopDrag, {passive: false})
        }

        return () => {
            thumbSlider?.current?.removeEventListener('mousedown', dragStart)
            window.removeEventListener('mousemove', draging)
            window.removeEventListener('mouseup', stopDrag)
        }
        
    }, [isDrag, thumbSliderScroll, slideList])

    const dragStart = (e) => {
        e.preventDefault()

        const sliderWidth = thumbSlider.current.offsetWidth
        const trackWidth = thumbSliderTrack.current.offsetWidth

        if(trackWidth > sliderWidth) {
            setIsDrag(true)
            return
        } else {
            return
        }
    }

    const draging = (e) => {
        e.preventDefault()
        
        if(isDrag) {
            let move = e.movementX * 0.7

            if(move > 0) {
                setThumbSliderScroll(prev => {
                    const scroll = prev - move

                    return scroll < 0 ? prev - move * 0.08 : scroll
                })
            } else if (move < 0) {
                setThumbSliderScroll(prev => {
                    const scroll = prev - move
                    let scrollLimit = thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth

                    return scroll > scrollLimit ? prev - move * 0.08 : scroll
                })
            }
        }
    }

    const stopDrag = (e) => {
        e.preventDefault()

        if(thumbSliderTrack.current.offsetWidth > thumbSlider.current.offsetWidth) {
            if(thumbSliderScroll < 0) {
                setThumbSliderScroll(0)
            }
            if(thumbSliderScroll > (thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth)) {
                setThumbSliderScroll(thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth)
            }
        }
        setIsDrag(false)
    }

    return {mainSlider,
            thumbSlider, 
            thumbSliderTrack, 
            slideList, 
            slideNum, 
            thumbSliderScroll, 
            addImgBtn, 
            changeSlideNum, 
            nextSlide, 
            prevSlide, 
            addNewImage, 
            deleteSlide}
}