import React, { useEffect, useState } from 'react';

const AnimateNumber = ({ target = 66445518, duration = 1000 }) => {
  // state: 현재 값(currentValue)을 관리하는 상태
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // 애니메이션을 시작할 때의 값
    let start = 0;

    // 애니메이션을 60FPS로 설정 (1초에 60번 화면을 갱신)
    const stepTime = 1000 / 60; // 1000ms (1초)를 60으로 나눈 값 -> 1프레임에 걸리는 시간 (약 16.67ms)
    const totalSteps = Math.ceil(duration / stepTime); // 전체 애니메이션에 필요한 프레임 수 계산
    // 예시: duration이 1000ms, stepTime이 16.67ms이면 totalSteps는 60번의 프레임으로 애니메이션을 끝내야 함

    // 애니메이션 진행 상황을 추적하는 변수
    let step = 0;

    // 애니메이션 함수
    const animate = () => {
      step++; // 애니메이션 진행 단계 1씩 증가

      // 진행 상황을 계산 (0부터 1까지의 비율로 애니메이션이 얼마나 진행되었는지 확인)
      const progress = step / totalSteps; // 예시: step이 30이면 progress는 0.5 (50% 진행)

      // target 값에 비례해서 새로운 값을 계산 (0에서 target까지)
      const newValue = Math.floor(progress * target); // 예시: progress가 0.5일 때 newValue는 target의 절반

      // 계산된 값이 이전 값(currentValue)과 다르면, 화면에 표시될 값을 업데이트
      if (newValue !== currentValue) {
        setCurrentValue(newValue); // state를 업데이트하여 숫자 애니메이션을 진행
      }

      // 애니메이션이 끝나지 않았다면 계속해서 애니메이션을 반복
      if (step < totalSteps) {
        requestAnimationFrame(animate); // 1프레임이 끝날 때마다 animate를 계속 호출
        // requestAnimationFrame은 브라우저에게 화면을 갱신할 때마다 애니메이션을 한 단계씩 진행하도록 요청
      } else {
        setCurrentValue(target); // 애니메이션이 끝나면 정확한 목표 값(target)으로 설정
        // 애니메이션 끝에 정확한 목표 값이 화면에 표시되도록 처리
      }
    };

    // 애니메이션을 시작
    requestAnimationFrame(animate);
  }, [target, duration]); // target과 duration이 변경될 때마다 애니메이션을 새로 시작

  return (
    <span>
      {currentValue.toLocaleString('ko-KR')}
      <span> 건</span>
    </span>
  );
};

export default AnimateNumber;
