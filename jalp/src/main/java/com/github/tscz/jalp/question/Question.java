package com.github.tscz.jalp.question;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "questions")
public class Question {
	@Id
	@GeneratedValue(generator = "question_generator")
	@SequenceGenerator(name = "question_generator", sequenceName = "question_sequence", initialValue = 1000)
	private Long id;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@NotBlank
	@Size(min = 3, max = 100)
	private String title;

	@Column(columnDefinition = "text")
	private String description;

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", title=" + title + ", description=" + description + "]";
	}

}
