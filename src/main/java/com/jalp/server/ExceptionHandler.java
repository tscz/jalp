package com.jalp.server;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.zalando.problem.spring.web.advice.ProblemHandling;

@ControllerAdvice()
public class ExceptionHandler implements ProblemHandling {

}